public class Binatang {
    private String nama;
//    hanya dapat diakses oleh class Binatang

    protected int umur;
//    hanya dapat di akses, pada class yang sama Binatang
//    class turunan, dan juga package yang sama

    String jenisKelamin;
//    no modifier hanya dapat di akses pada package , dan class yang sama

    public void tampilInfo(){
//        dapat di akses di mana saja
        System.out.println("Tampil Info : "+nama+"dan"+umur);
    }
}
