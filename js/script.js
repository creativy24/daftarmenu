const menuData = [
    { kategori: 'Makanan', nama: 'Kwetiaw Goreng Spesial', gambar: 'images/kwetiawgorengspesial.png', harga: 'Rp 25.000' },
	{ kategori: 'Makanan', nama: 'Mie Ayam Gelegar', gambar: 'images/mieayamgelegar.png', harga: 'Rp 15.000' },
	{ kategori: 'Makanan', nama: 'Nasi Goreng Kemangi', gambar: 'images/nasgorkemangi.png', harga: 'Rp 25.000' },
	{ kategori: 'Makanan', nama: 'Nasi Goreng Taichan', gambar: 'images/nasgortaichan.png', harga: 'Rp 20.000' },
	{ kategori: 'Makanan', nama: 'Nasi Ayam Goreng Sambel Matah', gambar: 'images/nasiayamgorengsambelmatah.png', harga: 'Rp 20.000' },
	{ kategori: 'Makanan', nama: 'Nasi Goreng Nenek', gambar: 'images/nasigorengnenek.png', harga: 'Rp 15.000' },
    { kategori: 'Makanan', nama: 'Nasi Kulit Ayam Sambel Matah', gambar: 'images/nasikulitayamsambelmatah.png', harga: 'Rp 15.000' },
    { kategori: 'Makanan', nama: 'Mie Godhog Komplit', gambar: '', harga: 'Rp 20.000' },
    { kategori: 'Makanan', nama: 'Nasi Goreng Balacan', gambar: '', harga: 'Rp 18.000' },
    { kategori: 'Makanan', nama: 'Nasi Goreng Balacan', gambar: '', harga: 'Rp 20.000' },
    { kategori: 'Makanan', nama: 'Nasi Goreng Spesial', gambar: '', harga: 'Rp 25.000' },
	{ kategori: 'Minuman', nama: 'Blue Sea Tea', gambar: 'images/blueseatea.png', harga: 'Rp 15.000' },
	{ kategori: 'Minuman', nama: 'Ice Lemon Tea', gambar: 'images/icelemontea.png', harga: 'Rp 8.000' },
	{ kategori: 'Minuman', nama: 'Ice Lime Squash', gambar: 'images/icelimesquash.png', harga: 'Rp 10.000' },
	{ kategori: 'Minuman', nama: 'Ice Rainbow', gambar: 'images/icerainbow.png', harga: 'Rp 15.000' },
	{ kategori: 'Lainnya', nama: 'Cromboloni', gambar: 'images/cromboloni.png', harga: 'Rp 15.000' },
	{ kategori: 'Lainnya', nama: 'Pancong Lumer', gambar: 'images/panconglumer.png', harga: 'Rp 15.000' },
	{ kategori: 'Lainnya', nama: 'Sate Taichan', gambar: 'images/satetaichan.png', harga: 'Rp 25.000' },
	{ kategori: 'Lainnya', nama: 'Seblak', gambar: 'images/seblak.png', harga: 'Rp 10.000' },
	{ kategori: 'Lainnya', nama: 'Seblak Ceker', gambar: 'images/seblakceker.png', harga: 'Rp 13.000' },
	{ kategori: 'Lainnya', nama: 'Seblak Komplit', gambar: 'images/seblakkomplit.png', harga: 'Rp 10.000' },
	{ kategori: 'Lainnya', nama: 'Seblak Rafael', gambar: 'images/seblakrafael.png', harga: 'Rp 10.000' },
	{ kategori: 'Lainnya', nama: 'Spagetti Carbonara', gambar: 'images/spagetticarbonara.png', harga: 'Rp 12.000' },
	{ kategori: 'Lainnya', nama: 'Tahu Cabe Garam', gambar: 'images/tahucabegaram.png', harga: 'Rp 15.000' },
    // Tambahkan data menu lainnya sesuai kebutuhan
];

function renderMenu(kategori) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    const filteredMenu = kategori === 'Semua' ? menuData : menuData.filter(menu => menu.kategori === kategori);

    filteredMenu.forEach(menu => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = menu.gambar;
        img.alt = menu.nama;

        const namaMenu = document.createElement('h3');
        namaMenu.innerText = menu.nama;

        const hargaMenu = document.createElement('p');
        hargaMenu.innerText = menu.harga;

        menuItem.appendChild(img);
        menuItem.appendChild(namaMenu);
        menuItem.appendChild(hargaMenu);

        menuContainer.appendChild(menuItem);
    });
}

function filterMenu(kategori) {
    renderMenu(kategori);
    
    // Tambahkan fungsi untuk menutup kategori setelah dipilih
    document.querySelector('.kategori').classList.remove('show');
}
