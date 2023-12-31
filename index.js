/* DOMÁCÍ ÚKOL 01
Parsování data
Převeďte datum na objekt.
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží 
řetězec obsahující datum ve formátu DD.MM.YYYY a 
vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
 */

const date = prompt("Zadejte datum ve formátu DD.MM.YYYY")
const pstnDay = date.indexOf(".")
const pstnMonth = date.lastIndexOf(".")

console.log(date)
console.log(pstnDay)
console.log(pstnMonth)

const day = () => {
        return document.body.innerHTML += `{ day: ${date.slice(0,pstnDay)}, month: ${date.slice((pstnDay+1),pstnMonth)}, year: ${date.slice((pstnMonth+1),(date.length+1))} }`
}

day(date) 

/* DOMÁCÍ ÚKOL 02
Formátování data
Převeďte datum do lidské podoby.
Bez použití knihovny Day.js napište funkci formatDate, která na vstupu 
obdrží objekt představující datum v následujícím formátu:
{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. 
Příklad použití:
document.body.innerHTML += formatDate({ day: 6, month: 4, year: 2021 }); 
// 06.04.2021

V tomto cvičení se vám jistě bude hodit metoda na textových řetězcích padStart. */

/* DOMÁCÍ ÚKOL 03
Python zaokrouhlování
Vytvořte pokročilou zaokrouhlovací funkci.
Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce 
zaokrouhluje malinko jinak, než jsme zvyklí. Pokud je desetinná část čísla 
přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. 
JavaScriptová funkce Math.round naopak provádí zaokrouhlování způsobem, 
na který jste zvyklí, tedy pro 0.5 vždy nahoru.

(Zaokrouhlování v Pythonu je složitější na implementaci, ale zajišťuje, 
že zaokrouhlování je spravedlivé. Naše běžné zaokrouhlování mírně preferuje 
větší čísla, pokud zaokrouhlujeme jen kladná čísla – 0,5 je totiž přesně 
uprostřed, ale my ho vždy zaokrouhlujeme nahoru.)

Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. 
Napište proto funkci jménem round, která bude zaokrouhlovat čísla 
na celé jednotky podle následujících pravidel:

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů (k nižším honotám).
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru (k vyšším hodnotám).
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.
V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla.

Bonus
Zajistěte, aby funkce správně fungovala i pro záporná čísla.

Tedy například -3.5 se zaokrouhlí na -4, naopak -2.5 se zaokrouhlí na -2. */