let dataBarang = [] //aray global untuk menyimpan data barang 

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// fungsi untuk menambah barang ke dalam keranjang 
function tambah () {
// mengambil data harga dari elemen input dengan id "hargainput"
// dan mengubahnya menjadi angka
let harga = Number(document.getElementById("hargainput").value)  

// masukan data harga ke dalam array dataBarang 
dataBarang.push(harga)

// kosongkan input harga setelah ditambahkan
document.getElementById("hargainput").value=""

// tampilakan data harga barang
tampilkan()
}

function tampilkan() {
  let total= 0
  let output =""
  
  //loop input harga barang dari array global data barang
for (let i = 0; i < dataBarang.length; i++) {
  let harga = dataBarang [i]
  total += harga
  
  output += "Barang ke-" + (i + 1) + ": Rp " + rupiah(harga) + "<br>"
}
  
  output+= "<hr>Total:Rp " + rupiah(total )
 
 // tampilkan output ke dalam elemen dengan id"hasil
 document.getElementById("hasil").innerHTML=output 

}

// fungsi untuk menghapus barang terakhir dari keranjang 
function hapus () {
  dataBarang.pop()
  tampilkan()
}

// fungsi untuk mereset keranjang 
function reset () {
  dataBarang=[]
  tampilkan ()
}
