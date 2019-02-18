package com.sheptia;

public class Continue {
    public static void main(String[]args) {
        System.out.println("-------------------- Fungsi Continue ---------------");
        System.out.println("-------------------- Test Case 1 -------------------");
        //test case 1
        for (int i = 1; i <= 8; i++){
            if (i%2 == 0){
                //kondisi dimana bilangan genap akan diabaikan atau tidak ditampilkan
                //selanjutnya perulangan tetap dilanjutkan dengan bilangan ganjil
                continue;
            }
            System.out.println("Hasil Fungsi Continue :" + i);
        }

        //test case 2
        System.out.println("----------------- Test Case 2 ------------------------");
        String negara[] = {"Indonesia","Inggris","Malaysia","Thailand"};
        for (int i=0; i<negara.length; i++){
            if (negara[i] == "Inggris"){
                //akan mengabaikan teks "Inggriss"
                //pada perulangan variabel i di tipe data array String negara[]
                continue;
            }
            System.out.println("Negara Asean :" +negara[i]);
        }
    }
}
