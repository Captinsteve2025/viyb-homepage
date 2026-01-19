'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Plus, Search, Download, MoreHorizontal, Pencil, Copy,
  Eye, Trash2, LogOut, Anchor, Filter
} from 'lucide-react';
import type { Listing } from '@/lib/listings/types';

export default function AdminListingsPage() {
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  // Fetch listings
  const fetchListings = useCallback(async () => {
    try {
      const res = await fetch('/api/listings');
      if (res.ok) {
        const data = await res.json();
        setListings(data);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  // Filter listings
  const filteredListings = listings.filter(listing => {
    const matchesSearch =
      searchQuery === '' ||
      listing.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.boatName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(listing.year).includes(searchQuery);

    const matchesStatus =
      statusFilter === 'all' || listing.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Sort by updated date (most recent first)
  const sortedListings = [...filteredListings].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Create new listing
  async function handleCreateListing() {
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });

      if (res.ok) {
        const listing = await res.json();
        router.push(`/admin/listings/${listing.id}/details`);
      }
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  }

  // Duplicate listing
  async function handleDuplicate(id: string) {
    try {
      const res = await fetch(`/api/listings/${id}?action=duplicate`, {
        method: 'POST'
      });

      if (res.ok) {
        const listing = await res.json();
        router.push(`/admin/listings/${listing.id}/details`);
      }
    } catch (error) {
      console.error('Error duplicating listing:', error);
    }
  }

  // Delete listing
  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this listing?')) return;

    try {
      const res = await fetch(`/api/listings/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        setListings(prev => prev.filter(l => l.id !== id));
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  }

  // Export CSV
  async function handleExportCSV() {
    window.open('/api/listings?format=csv', '_blank');
  }

  // Logout
  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  // Format price
  function formatPrice(price: number, currency: string, hidePrice: boolean) {
    if (hidePrice) return 'Price on Request';
    if (price === 0) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(price);
  }

  // Format date
  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Anchor className="w-6 h-6 text-amber-500" />
          <h1 className="text-lg font-semibold">Listings Manager</h1>
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

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-3 w-full sm:w-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as typeof statusFilter)}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="w-4 h-4 mr-2 text-slate-400" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExportCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button onClick={handleCreateListing} className="bg-sky-600 hover:bg-sky-700">
                <Plus className="w-4 h-4 mr-2" />
                New Listing
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading listings...</div>
          ) : sortedListings.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-500 mb-4">
                {searchQuery || statusFilter !== 'all'
                  ? 'No listings match your filters.'
                  : 'No listings yet. Create your first listing!'}
              </p>
              {!searchQuery && statusFilter === 'all' && (
                <Button onClick={handleCreateListing} className="bg-sky-600 hover:bg-sky-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Listing
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Year</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Make</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Model</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Length</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Price</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Location</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Updated</th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedListings.map(listing => (
                    <tr key={listing.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <Badge
                          variant={listing.status === 'active' ? 'default' : 'secondary'}
                          className={listing.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                        >
                          {listing.status === 'active' ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-900">{listing.year}</td>
                      <td className="px-4 py-3 text-sm text-slate-900">{listing.make || '-'}</td>
                      <td className="px-4 py-3 text-sm text-slate-900">{listing.model || '-'}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {listing.lengthFt > 0 ? `${listing.lengthFt}'` : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-900">
                        {formatPrice(listing.price, listing.currency, listing.hidePrice)}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {listing.city && listing.country
                          ? `${listing.city}, ${listing.country}`
                          : listing.country || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500">
                        {formatDate(listing.updatedAt)}
                      </td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/listings/${listing.id}/details`}>
                                <Pencil className="w-4 h-4 mr-2" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDuplicate(listing.id)}>
                              <Copy className="w-4 h-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            {listing.status === 'active' && (
                              <DropdownMenuItem asChild>
                                <Link href={`/boats/${listing.slug}`} target="_blank">
                                  <Eye className="w-4 h-4 mr-2" />
                                  Preview
                                </Link>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleDelete(listing.id)}
                              className="text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-slate-500">
          {sortedListings.length} listing{sortedListings.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
