import { FileText, Download } from "lucide-react";

interface DownloadItem {
  title: string;
  filename: string;
}

export default function DownloadsPage() {
  const forms: DownloadItem[] = [
    { title: "Member Enrollment & Transfer Mandate Form", filename: "Member_Enrollment_Transfer_Mandate_Form.pdf" },
    { title: "Direct Debit Authorization Form", filename: "Direct_Debit_Authorization_Form.pdf" },
    { title: "Withdrawal Form", filename: "Withdrawal_Form.pdf" },
    { title: "Tier 2 Personal Pensions Form", filename: "Tier_2_Personal_Pensions_Form.pdf" },
    { title: "Tier 3 Personal Pensions Form", filename: "Tier_3_Personal_Pensions_Form.pdf" },
    { title: "Tier 2 – Nomination Sample Letter", filename: "Tier_2_Nomination_Sample_Letter.pdf" },
    { title: "Tier 3 PF – Nomination Sample Letter", filename: "Tier_3_PF_Nomination_Sample_Letter.pdf" },
    { title: "Transfer Mandate Form", filename: "Transfer_Mandate_Form.pdf" },
    { title: "Beneficiary Update Form", filename: "Beneficiary_Update_Form.pdf" },
    { title: "Monthly Remittance Statement", filename: "Monthly_Remittance_Statement.pdf" },
  ];

  const handleDownload = (item: DownloadItem) => {
    // Generate a simulated file download interaction
    alert(`Initiating download for ${item.title} (${item.filename}). This download is packed and prepared on demand.`);
  };

  return (
    <div className="bg-[#fafbfb] min-h-screen py-24 sm:py-28 md:py-36 font-montserrat select-none scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Giant Centered Header */}
        <div className="text-center mb-16">
          <h1 className="text-[42px] sm:text-[54px] font-bold text-[#052e16] tracking-tight font-sans">
            Downloads
          </h1>
          <div className="w-16 h-1 bg-[#32B44A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Column Layout matching screenshot closely */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-3">
            <div className="flex w-full items-center justify-between border border-transparent bg-[#052e16] px-6 py-4.5 font-sans text-[16px] font-semibold tracking-wide text-white shadow-md">
              <span className="flex items-center gap-3">
                <span>Forms</span>
                <FileText size={18} />
              </span>
            </div>
          </div>

          {/* Right Column: Files table-list matching exact visual design of screenshot */}
          <div className="lg:col-span-9 bg-white border border-gray-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-100">
              {forms.map((item) => (
                <div 
                  key={item.title} 
                  className="px-6 py-4.5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  {/* Document Title */}
                  <span className="text-[14px] sm:text-[15px] font-sans font-medium text-gray-700 leading-tight">
                    {item.title}
                  </span>

                  {/* Clean dark green Download button with cloud icon matching the screenshot */}
                  <button
                    onClick={() => handleDownload(item)}
                    className="px-5 py-2.5 bg-[#052e16] hover:bg-[#0b4d27] text-white text-[12px] font-semibold tracking-wide rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>Download</span>
                    <Download size={14} className="stroke-[2.5]" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
