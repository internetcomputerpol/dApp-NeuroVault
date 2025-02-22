import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";

actor {



type pochodzenie = {#Miami; #NowyJork; #Hegemonia; #Posterunek; #Detroid;#Texas;#Vegas };
type profesja = {#Chemik; #Ganger; #Gladiator; #Kurier; #Medyk; #Mafiozo; #Szaman; #WojownikAutostrad; #Zlodziej };
type specjalizacja = {#Technik; #Ranger; #Cwaniak; #Wojownik };



type Postac = 
{
imie : Text;
wiek : Int16;

pochodzenie : pochodzenie;
profesja : profesja;
specjalizacja: specjalizacja;

budowa : Int8;
zrecznosc:Int8;
charakter:Int8;
spryt:Int8;
percepcja:Int8;

};



stable var nextId = 1;

var postacie = HashMap.HashMap<Nat,Postac>(10,Nat.equal,Hash.hash);

// CREATE 
public func createPostac ( imie:Text, wiek:Int16, pochodzenie:pochodzenie, specjalizacja:specjalizacja, profesja:profesja, budowa:Int8, zrecznosc: Int8, 
spryt: Int8, percepcja:Int8, charakter : Int8) : async Nat
{

nextId += 1;
let id = nextId;

let nowaPostac : Postac = {
imie = imie;
wiek = wiek;
pochodzenie = pochodzenie;
profesja = profesja;
specjalizacja = specjalizacja;
budowa = budowa;
zrecznosc = zrecznosc;
charakter = charakter;
spryt = spryt;
percepcja = percepcja;

};

postacie.put(id,nowaPostac);
return id;
};

//READ
public func readPostac  (id:Nat) : async ?Postac 
{

return postacie.get(id);
};






  };

