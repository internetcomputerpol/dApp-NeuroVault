import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Postac {
  'pochodzenie' : pochodzenie,
  'imie' : string,
  'charakter' : number,
  'wiek' : number,
  'specjalizacja' : specjalizacja,
  'percepcja' : number,
  'spryt' : number,
  'zrecznosc' : number,
  'budowa' : number,
  'profesja' : profesja,
}
export type pochodzenie = { 'Hegemonia' : null } |
  { 'Posterunek' : null } |
  { 'Detroid' : null } |
  { 'Miami' : null } |
  { 'Texas' : null } |
  { 'Vegas' : null } |
  { 'NowyJork' : null };
export type profesja = { 'Gladiator' : null } |
  { 'Mafiozo' : null } |
  { 'WojownikAutostrad' : null } |
  { 'Ganger' : null } |
  { 'Medyk' : null } |
  { 'Kurier' : null } |
  { 'Szaman' : null } |
  { 'Zlodziej' : null } |
  { 'Chemik' : null };
export type specjalizacja = { 'Wojownik' : null } |
  { 'Technik' : null } |
  { 'Cwaniak' : null } |
  { 'Ranger' : null };
export interface _SERVICE {
  'createPostac' : ActorMethod<
    [
      string,
      number,
      pochodzenie,
      specjalizacja,
      profesja,
      number,
      number,
      number,
      number,
      number,
    ],
    bigint
  >,
  'readPostac' : ActorMethod<[bigint], [] | [Postac]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
