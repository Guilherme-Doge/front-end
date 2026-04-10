const addRank = document.getElementById('add-rank');
const tierlist = document.getElementById('tierlist');
const itemBank = document.getElementById('item-bank');

addRank.addEventListener('click', () => {
    const newRow = document.createElement('div');
    
    newRow.className = "flex min-h-[80px] border-b border-slate-700 bg-slate-800";
    
    newRow.innerHTML = `
        <div 
            class="w-24 flex items-center justify-center bg-purple-500 text-slate-900 font-bold border-r border-slate-700 outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
            contenteditable="true"
            spellcheck="false">
            NEW
        </div>
        <div class="flex-1 p-2 flex flex-wrap gap-2 min-h-[80px]"></div>
    `;

    tierlist.insertBefore(newRow, addRank.parentElement);
    
    newRow.querySelector('[contenteditable]').focus();
});