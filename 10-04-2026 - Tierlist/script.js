document.addEventListener('DOMContentLoaded', () => {
  const tierlist = document.getElementById('tierlist');
  const addRank = document.getElementById('add-rank');
  const addRankRow = document.getElementById('add-rank-row');
  const itemBank = document.getElementById('item-bank');
  const imageUpload = document.getElementById('image-upload');

  const sortableConfig = {
    group: {
      name: 'shared',
      pull: true,
      put: true
    },
    animation: 150,
    ghostClass: 'drag-ghost',
    dragClass: 'drag-moving',
    chosenClass: 'drag-selected',
    filter: '.delete-btn',
    preventOnFilter: true,
    emptyInsertThreshold: 30,
    fallbackOnBody: true,
    swapThreshold: 0.65
  };

  function initSortableOnce(el) {
    if (!el || el.dataset.sortableInit === 'true') return;
    new Sortable(el, sortableConfig);
    el.dataset.sortableInit = 'true';
  }

  function initAllSortables() {
    document.querySelectorAll('.tier-dropzone, #item-bank').forEach(initSortableOnce);
  }

  function updateButtons() {
    const tiers = document.querySelectorAll('.tier-row.tier');

    tiers.forEach((tier, index) => {
      const up = tier.querySelector('.move-up');
      const down = tier.querySelector('.move-down');

      if (!up || !down) return;

      up.disabled = index === 0;
      down.disabled = index === tiers.length - 1;
    });
  }

  function setupTierControls(tier) {
    const up = tier.querySelector('.move-up');
    const down = tier.querySelector('.move-down');

    if (!up || !down) return;

    up.onclick = () => {
      const prev = tier.previousElementSibling;
      if (!prev || prev === addRankRow) return;

      tierlist.insertBefore(tier, prev);
      updateButtons();
    };

    down.onclick = () => {
      const next = tier.nextElementSibling;
      if (!next || next === addRankRow) return;

      tierlist.insertBefore(next, tier);
      updateButtons();
    };
  }

  function createTier(name, color) {
    const row = document.createElement('div');
    row.className = 'tier-row tier flex min-h-[80px] border-b border-slate-700 bg-slate-800';

    row.innerHTML = `
      <div class="w-24 flex flex-col items-center justify-center text-slate-900 font-bold border-r border-slate-700"
           style="background-color: ${color};">
        <button type="button" class="move-up text-xl leading-none">↑</button>

        <div contenteditable="true"
             spellcheck="false"
             class="my-1 text-center outline-none w-full px-1">
          ${name}
        </div>

        <button type="button" class="move-down text-xl leading-none">↓</button>
      </div>

      <div class="tier-dropzone flex-1 p-2 flex flex-wrap gap-2 min-h-[80px] items-start"></div>
    `;

    setupTierControls(row);
    return row;
  }

  function createImageItem(src) {
    const item = document.createElement('div');
    item.className = 'w-20 h-20 shrink-0 rounded overflow-hidden cursor-move border border-slate-600 bg-slate-700';

    item.innerHTML = `
      <div class="relative w-full h-full">
        <img src="${src}" class="w-full h-full object-cover" draggable="false" />
        <button type="button" class="delete-btn absolute top-0 right-0 bg-black/70 text-white text-xs px-1">
          x
        </button>
      </div>
    `;

    item.querySelector('.delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      item.remove();
    });

    return item;
  }

  const initialTiers = [
    { name: 'S', color: '#ef4444' },
    { name: 'A', color: '#f97316' },
    { name: 'B', color: '#eab308' },
    { name: 'C', color: '#84cc16' },
    { name: 'D', color: '#3b82f6' }
  ];

  initialTiers.forEach(({ name, color }) => {
    const row = createTier(name, color);
    tierlist.insertBefore(row, addRankRow);
  });

  initAllSortables();
  updateButtons();

  addRank.addEventListener('click', () => {
    const newTier = createTier('NEW', '#a855f7');
    tierlist.insertBefore(newTier, addRankRow);

    initAllSortables();
    updateButtons();

    const editable = newTier.querySelector('[contenteditable="true"]');
    if (editable) editable.focus();
  });

  imageUpload.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);

    files.forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();

      reader.onload = (ev) => {
        const item = createImageItem(ev.target.result);
        itemBank.appendChild(item);
      };

      reader.readAsDataURL(file);
    });

    imageUpload.value = '';
  });
});