function showFlipById(id) {
    
    document.getElementById('donationBtn').classList.remove("bg-[#B4F461]");
    document.getElementById('historyBtn').classList.remove("bg-[#B4F461]");
    document.getElementById('donationBtn').classList.remove("hover:bg-[#B4F461]");
    document.getElementById('historyBtn').classList.remove("hover:bg-slate-100");
    document.getElementById(id).classList.add("bg-[#B4F461]");
}

function showFlipSectionById(id) {
    document.getElementById('donateSection').classList.add("hidden");
    document.getElementById('historySection').classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}