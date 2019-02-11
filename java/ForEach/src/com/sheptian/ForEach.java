package com.sheptian;

public class ForEach {
    public static void main(String[]args){
        String bahasapemrograman[] = {"Java","PHP","SQL","Javascript","C++","Python"};

        for (String bahasa:bahasapemrograman){
    //        for eachloop untuk array
            System.out.println("Bahasa Pemrograman" + bahasa);
        }
    }
}
