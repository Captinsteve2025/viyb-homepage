# MCC Program Guide PDFs

## 📁 PDF Files Location

This directory (`/public/PDFs/`) is where you should place all downloadable PDF files for the Program Guide page.

---

## 📄 Required PDF Files

Place the following PDF files in this directory:

### Essential Documents
1. **`MCC-Complete-Program-Guide.pdf`**
   - Complete 40-page program guide
   - Size: ~4-5 MB
   - Content: Full MCC program details, requirements, benefits, process

2. **`MCC-Quick-Start-Guide.pdf`**
   - Quick reference guide (12 pages)
   - Size: ~1-2 MB
   - Content: Essential information to get started quickly

3. **`MCC-Financial-Overview.pdf`**
   - Financial breakdown (16 pages)
   - Size: ~2-3 MB
   - Content: Revenue potential, expenses, ROI, tax benefits

### Application & Requirements
4. **`MCC-Application-Package.pdf`**
   - Application forms (8 pages)
   - Size: ~1-2 MB
   - Content: Forms, documentation checklist, submission guidelines

5. **`MCC-Yacht-Requirements.pdf`**
   - Yacht specifications (14 pages)
   - Size: ~2-3 MB
   - Content: Safety standards, equipment requirements, inspections

### Additional Resources
6. **`MCC-Tax-Benefits-Guide.pdf`**
   - Tax guide (10 pages)
   - Size: ~1-2 MB
   - Content: Bonus depreciation, deductions, tax strategies

7. **`MCC-Marketing-Materials-Kit.pdf`**
   - Marketing templates (24 pages)
   - Size: ~5-7 MB
   - Content: E-brochure examples, photo guidelines, templates

8. **`MCC-Owners-Manual.pdf`**
   - Operations manual (28 pages)
   - Size: ~3-4 MB
   - Content: Day-to-day operations, best practices, protocols

9. **`MCC-FAQ.pdf`**
   - Frequently Asked Questions (18 pages)
   - Size: ~1-2 MB
   - Content: Common questions and answers

### Bulk Download
10. **`MCC-Complete-Resource-Package.zip`**
    - ZIP file containing all PDFs
    - Size: ~15-20 MB
    - Content: All documents above in one package

---

## 🔧 How to Add PDFs

### Method 1: Direct Upload
1. Place PDF files in `/public/PDFs/` directory
2. Files will be accessible at `/PDFs/filename.pdf`
3. No code changes needed

### Method 2: Update Download Function

Edit `/src/app/program-guide/page.tsx`:

```typescript
const downloadPDF = (filename: string) => {
  // Create download link
  const link = document.createElement('a');
  link.href = `/PDFs/${filename}`;
  link.download = filename;
  link.click();
};
```

---

## 📝 PDF Creation Guidelines

### Content Guidelines
- **Professional Design:** Use consistent branding (VIYB colors, fonts)
- **Clear Structure:** Table of contents, headers, page numbers
- **High Quality:** Readable fonts (min 10pt), high-res images
- **Accessible:** Searchable text, proper heading structure

### Technical Specs
- **Format:** PDF/A for archival quality
- **Resolution:** 300 DPI for images
- **Size:** Optimize for web (< 5MB per document ideal)
- **Compatibility:** PDF 1.7 or higher
- **Security:** No password protection for public downloads

### Branding
- **Colors:** Navy (#0a2540), Gold (#d4af37)
- **Logo:** Include VIYB logo on cover and headers
- **Fonts:** Professional sans-serif (Arial, Helvetica, or custom)
- **Footer:** Contact info, website URL on each page

---

## 🎨 Template Suggestions

### Cover Page Template
```
[VIYB Logo]

MCC Charter Management Program
[Document Title]

Virgin Islands Yacht Broker
British Virgin Islands
www.viyb.com | info@viyb.com
```

### Page Footer Template
```
Page X of Y | www.viyb.com | +1 (284) 494-2450
```

---

## 📊 Recommended Content for Each PDF

### 1. Complete Program Guide
- Executive summary
- How MCC works (detailed)
- Financial structure
- Owner responsibilities
- Program benefits
- Application process
- FAQs
- Contact information

### 2. Quick Start Guide
- Program overview (1 page)
- Getting started checklist
- Key requirements
- Timeline
- Next steps
- Quick reference contacts

### 3. Financial Overview
- Revenue potential examples
- Cost breakdowns
- ROI calculations (sample scenarios)
- Tax benefits explanation
- Payment schedules
- Financial reporting details

### 4. Application Package
- Application form
- Required documents checklist
- Yacht information form
- Insurance requirements
- Crew information form
- Submission instructions

### 5. Yacht Requirements
- Minimum specifications
- Safety equipment list
- Inspection standards
- Maintenance requirements
- Survey requirements
- Compliance checklist

### 6. Tax Benefits Guide
- Bonus depreciation explained
- Section 179 deduction
- Charter business taxation
- Record keeping requirements
- Tax planning strategies
- CPA referrals

### 7. Marketing Materials Kit
- E-brochure template
- Photo guidelines
- Crew profile template
- Guest review template
- Social media examples
- Marketing calendar

### 8. Owner's Manual
- Day-to-day operations
- Communication protocols
- Booking procedures
- Charter guest preparation
- Post-charter procedures
- Emergency contacts
- Support resources

### 9. FAQ Document
- Program eligibility
- Financial questions
- Operational questions
- Insurance questions
- Tax questions
- Contract questions

---

## 🚀 Going Live Checklist

Before making PDFs live:

- [ ] All PDFs created and reviewed
- [ ] Files placed in `/public/PDFs/` directory
- [ ] File sizes optimized (compressed)
- [ ] PDFs tested for download
- [ ] Content reviewed for accuracy
- [ ] Legal review completed
- [ ] Branding consistent across all docs
- [ ] Contact information current
- [ ] Links tested (if any internal links)
- [ ] Mobile-friendly (readable on phones)

---

## 🔄 Update Process

When updating PDFs:

1. **Create new version** with date in filename
2. **Test download** to verify file
3. **Replace old file** or keep versioned
4. **Update file size** on webpage if needed
5. **Notify users** of updates (if major changes)

---

## 📧 For Production Use

**Temporary Solution:**
The current page shows an alert when PDFs are clicked. This is intentional for demonstration purposes.

**Production Implementation:**
1. Create actual PDF files using the guidelines above
2. Place files in `/public/PDFs/` directory
3. Update the download function to use real files
4. Test all downloads thoroughly

---

## 💡 Alternative Hosting

If PDFs are very large, consider:
- **CDN Hosting:** Amazon S3, Cloudflare R2
- **External Service:** DocSend, Google Drive (with direct links)
- **Chunked Downloads:** Split large files into chapters

---

## 📞 Questions?

For help creating these PDFs or customizing content:
- Review existing MCC program documentation
- Consult with marketing team for branding
- Work with legal for compliance review

---

**Last Updated:** December 2024
**Version:** 1.0
