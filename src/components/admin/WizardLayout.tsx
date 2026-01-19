'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Mail, History, Printer, Eye, LogOut, Save, ChevronLeft,
  FileText, Image, Ruler, Settings, ListChecks, FileEdit,
  CheckCircle2, Circle, Anchor
} from 'lucide-react';
import type { Listing, ListingScoreItem } from '@/lib/listings/types';
import { calculateListingScore } from '@/lib/listings/types';

interface WizardLayoutProps {
  children: React.ReactNode;
  listing: Listing;
  onSave: (data: Partial<Listing>) => Promise<void>;
  isSaving?: boolean;
}

const WIZARD_STEPS = [
  { id: 'details', label: 'Details', icon: FileText, path: '' },
  { id: 'photos', label: 'Photos & Videos', icon: Image, path: '/photos' },
  { id: 'measurements', label: 'Measurements', icon: Ruler, path: '/measurements' },
  { id: 'propulsion', label: 'Propulsion', icon: Settings, path: '/propulsion' },
  { id: 'features', label: 'Features', icon: ListChecks, path: '/features' },
  { id: 'descriptions', label: 'Descriptions', icon: FileEdit, path: '/descriptions' }
];

export default function WizardLayout({
  children,
  listing,
  onSave,
  isSaving = false
}: WizardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState(listing.status);
  const [scoreData, setScoreData] = useState<{ score: number; items: ListingScoreItem[] }>({ score: 0, items: [] });

  // Calculate score
  useEffect(() => {
    setScoreData(calculateListingScore(listing));
  }, [listing]);

  // Update status when listing changes
  useEffect(() => {
    setStatus(listing.status);
  }, [listing.status]);

  // Get current step
  const currentStepIndex = WIZARD_STEPS.findIndex(step => {
    const basePath = `/admin/listings/${listing.id}`;
    const stepPath = `${basePath}${step.path}`;
    return pathname === stepPath || (step.path === '' && pathname === basePath + '/details');
  });

  // Get base path for listing
  const basePath = `/admin/listings/${listing.id}`;

  // Handle status change
  const handleStatusChange = useCallback(async (newStatus: string) => {
    setStatus(newStatus as 'active' | 'inactive');
    await onSave({ status: newStatus as 'active' | 'inactive' });
  }, [onSave]);

  // Handle logout
  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  // Get listing title
  const listingTitle = `${listing.year} ${listing.make || ''} ${listing.model || ''}`.trim() || 'New Listing';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Header */}
      <header className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/admin/listings" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Inventory</span>
          </Link>
          <div className="h-6 w-px bg-slate-600" />
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-amber-500" />
            <h1 className="font-medium truncate max-w-[200px] sm:max-w-md">{listingTitle}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:ml-2 sm:inline">Logout</span>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-56px)] flex flex-col sticky top-14 h-[calc(100vh-56px)]">
          <ScrollArea className="flex-1">
            <nav className="p-4 space-y-1">
              {WIZARD_STEPS.map((step, index) => {
                const isActive = index === currentStepIndex;
                const Icon = step.icon;
                const href = `${basePath}${step.path || '/details'}`;

                return (
                  <Link
                    key={step.id}
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 font-medium border-l-4 border-sky-600 -ml-1 pl-4'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {step.label}
                  </Link>
                );
              })}
            </nav>

            {/* Listing Status */}
            <div className="p-4 border-t border-slate-200">
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Listing Status
              </label>
              <Select value={status} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inactive">Off - Inactive</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => onSave({})}
                disabled={isSaving}
                className="w-full mt-3 bg-sky-600 hover:bg-sky-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save'}
              </Button>

              {/* Quick Actions */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded" title="Email">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded" title="History">
                  <History className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded" title="Print">
                  <Printer className="w-4 h-4" />
                </button>
                <Link
                  href={`/boats/${listing.slug}`}
                  target="_blank"
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded"
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Listing Score */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-700">Listing Score</span>
                <button className="text-slate-400 hover:text-slate-600" title="Higher scores get more exposure">
                  <Circle className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-1.5">
                  {scoreData.items.map(item => (
                    <div key={item.key} className="flex items-center gap-2 text-sm">
                      {item.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300" />
                      )}
                      <span className={item.completed ? 'text-slate-700' : 'text-slate-400'}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Circular Score */}
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-slate-200"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${(scoreData.score / 100) * 176} 176`}
                      className="text-sky-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">
                    {scoreData.score}%
                  </span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
