import React from "react";

const MainFooter = () => {
  return (
    <div className="bg-slate-400 flex w-full justify-center">
      <div className="py-8 w-full max-w-7xl">
        <div className="grid grid-cols-3 gap-y-4 pb-4">
          <div className="col-span-1 space-y-2">
            <div className="text-white font-bold">Company</div>
            <div className="text-white">About</div>
            <div className="text-white">Blog</div>
            <div className="text-white">Careers</div>
            <div className="text-white">Contact</div>
          </div>
          <div className="col-span-1 space-y-2">
            <div className="text-white font-bold">Product</div>
            <div className="text-white">Features</div>
            <div className="text-white">Pricing</div>
            <div className="text-white">Security</div>
            <div className="text-white">Integrations</div>
          </div>
          <div className="col-span-1 space-y-2">
            <div className="text-white font-bold">Resources</div>
            <div className="text-white">Docs</div>
            <div className="text-white">API</div>
            <div className="text-white">Status</div>
            <div className="text-white">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
