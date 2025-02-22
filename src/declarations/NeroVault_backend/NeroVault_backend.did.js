export const idlFactory = ({ IDL }) => {
  const pochodzenie = IDL.Variant({
    'Hegemonia' : IDL.Null,
    'Posterunek' : IDL.Null,
    'Detroid' : IDL.Null,
    'Miami' : IDL.Null,
    'Texas' : IDL.Null,
    'Vegas' : IDL.Null,
    'NowyJork' : IDL.Null,
  });
  const specjalizacja = IDL.Variant({
    'Wojownik' : IDL.Null,
    'Technik' : IDL.Null,
    'Cwaniak' : IDL.Null,
    'Ranger' : IDL.Null,
  });
  const profesja = IDL.Variant({
    'Gladiator' : IDL.Null,
    'Mafiozo' : IDL.Null,
    'WojownikAutostrad' : IDL.Null,
    'Ganger' : IDL.Null,
    'Medyk' : IDL.Null,
    'Kurier' : IDL.Null,
    'Szaman' : IDL.Null,
    'Zlodziej' : IDL.Null,
    'Chemik' : IDL.Null,
  });
  const Postac = IDL.Record({
    'pochodzenie' : pochodzenie,
    'imie' : IDL.Text,
    'charakter' : IDL.Int8,
    'wiek' : IDL.Int16,
    'specjalizacja' : specjalizacja,
    'percepcja' : IDL.Int8,
    'spryt' : IDL.Int8,
    'zrecznosc' : IDL.Int8,
    'budowa' : IDL.Int8,
    'profesja' : profesja,
  });
  return IDL.Service({
    'createPostac' : IDL.Func(
        [
          IDL.Text,
          IDL.Int16,
          pochodzenie,
          specjalizacja,
          profesja,
          IDL.Int8,
          IDL.Int8,
          IDL.Int8,
          IDL.Int8,
          IDL.Int8,
        ],
        [IDL.Nat],
        [],
      ),
    'readPostac' : IDL.Func([IDL.Nat], [IDL.Opt(Postac)], []),
  });
};
export const init = ({ IDL }) => { return []; };
