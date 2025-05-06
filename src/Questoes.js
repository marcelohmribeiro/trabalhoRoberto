export const questions = [
    {
        question: "O que define um conjunto?",
        options: [
            "Uma coleção não organizada de objetos",
            "Um agrupamento de números repetidos",
            "Um conjunto de pares ordenados",
            "Uma coleção bem definida de objetos distintos"
        ],
        answer: "Uma coleção bem definida de objetos distintos",
        explanation: "Um conjunto é definido como uma coleção bem definida de objetos distintos, ou seja, sem repetições e com clareza sobre seus elementos."
    },
    {
        question: "Quais são os elementos do conjunto A dado por A = {1, 2, 3}?",
        options: ["1, 2, 3", "a, b, c", "3, 2, 1, 0", "2, 4, 6"],
        answer: "1, 2, 3",
        explanation: "Os elementos do conjunto A são os números listados entre chaves: 1, 2 e 3."
    },
    {
        question: "O conjunto B = {a, b, c, d} possui quantos elementos?",
        options: ["3", "4", "5", "2"],
        answer: "4",
        explanation: "O conjunto tem quatro letras distintas, logo possui 4 elementos."
    },
    {
        question: "O que significa dizer que um conjunto é finito?",
        options: [
            "Que ele contém infinitos subconjuntos",
            "Que ele não possui elementos",
            "Que ele possui um número contável de elementos",
            "Que ele contém apenas números pares"
        ],
        answer: "Que ele possui um número contável de elementos",
        explanation: "Um conjunto é finito quando seus elementos podem ser contados, mesmo que sejam muitos."
    },
    {
        question: "Defina o que é um conjunto vazio.",
        options: [
            "Um conjunto com um elemento zero",
            "Um conjunto com um número negativo",
            "Um conjunto que não possui nenhum elemento",
            "Um conjunto com elementos desconhecidos"
        ],
        answer: "Um conjunto que não possui nenhum elemento",
        explanation: "Conjunto vazio é aquele que não contém nenhum elemento. É representado por ∅ ou {}."
    },
    {
        question: "O que é um subconjunto de um conjunto?",
        options: [
            "Um conjunto maior do que o original",
            "Um conjunto que possui elementos diferentes",
            "Um conjunto que possui pelo menos um elemento em comum",
            "Um conjunto cujos elementos também pertencem ao conjunto original"
        ],
        answer: "Um conjunto cujos elementos também pertencem ao conjunto original",
        explanation: "Um subconjunto contém apenas elementos que estão no conjunto original."
    },
    {
        question: "Quantos subconjuntos o conjunto A = {1, 2, 3} possui?",
        options: ["3", "6", "8", "5"],
        answer: "8",
        explanation: "Um conjunto com n elementos possui 2^n subconjuntos. Aqui, 2³ = 8."
    },
    {
        question: "O que é o conjunto das partes de um conjunto A?",
        options: [
            "O conjunto dos elementos pares de A",
            "O conjunto dos subconjuntos de A",
            "O conjunto dos complementares de A",
            "O conjunto dos elementos negativos de A"
        ],
        answer: "O conjunto dos subconjuntos de A",
        explanation: "O conjunto das partes é o conjunto formado por todos os subconjuntos de A, incluindo o conjunto vazio e o próprio A."
    },
    {
        question: "Qual é o conjunto das partes do conjunto A = {1, 2}?",
        options: [
            "{1}, {2}",
            "{1, 2}, {1, 2, 3}",
            "∅, {1}, {2}, {1, 2}",
            "A, A², A³"
        ],
        answer: "∅, {1}, {2}, {1, 2}",
        explanation: "Os subconjuntos de {1, 2} são: ∅, {1}, {2} e {1, 2}."
    },
    {
        question: "Quando dois conjuntos são considerados iguais?",
        options: [
            "Quando têm o mesmo número de elementos",
            "Quando têm os mesmos subconjuntos",
            "Quando os elementos de um estão contidos no outro",
            "Quando possuem exatamente os mesmos elementos"
        ],
        answer: "Quando possuem exatamente os mesmos elementos",
        explanation: "Dois conjuntos são iguais se todos os seus elementos são os mesmos, independentemente da ordem."
    },
    {
        question: "Qual símbolo representa o conjunto vazio?",
        options: ["Ø", "{}", "∅", "Todos os anteriores"],
        answer: "Todos os anteriores",
        explanation: "Todos os símbolos representam corretamente o conjunto vazio, embora ∅ seja o mais usado."
    },
    {
        question: "O que representa o símbolo ∈?",
        options: [
            "Está contido em",
            "Pertence a",
            "É igual a",
            "É subconjunto de"
        ],
        answer: "Pertence a",
        explanation: "O símbolo ∈ indica que um elemento pertence a um conjunto."
    },
    {
        question: "O que significa A ⊆ B?",
        options: [
            "A e B são iguais",
            "A não tem elementos em comum com B",
            "A é subconjunto de B",
            "A contém B"
        ],
        answer: "A é subconjunto de B",
        explanation: "O símbolo ⊆ indica que todos os elementos de A estão também em B."
    },
    {
        question: "Qual é o número total de subconjuntos de um conjunto com 4 elementos?",
        options: ["8", "16", "4", "12"],
        answer: "16",
        explanation: "O número de subconjuntos é dado por 2^n. Com 4 elementos, temos 2^4 = 16."
    },
    {
        question: "O conjunto dos números naturais é representado por:",
        options: ["Z", "Q", "N", "R"],
        answer: "N",
        explanation: "A letra N representa o conjunto dos números naturais: 0, 1, 2, 3..."
    },
    {
        question: "O conjunto dos números inteiros é representado por:",
        options: ["Q", "Z", "N", "R"],
        answer: "Z",
        explanation: "Z representa o conjunto dos números inteiros: ..., -2, -1, 0, 1, 2..."
    },
    {
        question: "O conjunto dos números racionais é representado por:",
        options: ["N", "Z", "Q", "R"],
        answer: "Q",
        explanation: "Q representa os números racionais, que podem ser escritos como frações (a/b)."
    },
    {
        question: "O conjunto dos números reais é representado por:",
        options: ["Z", "Q", "R", "N"],
        answer: "R",
        explanation: "R representa todos os números reais: racionais e irracionais."
    },
    {
        question: "Qual das opções representa corretamente um conjunto por extensão?",
        options: [
            "A = x ∈ N | x < 5",
            "A = {x | x < 5}",
            "A = {1, 2, 3, 4}",
            "A = x < 5"
        ],
        answer: "A = {1, 2, 3, 4}",
        explanation: "Representação por extensão mostra todos os elementos do conjunto explicitamente."
    },
    {
        question: "Qual das opções representa corretamente um conjunto por compreensão?",
        options: [
            "B = {2, 4, 6, 8}",
            "B = x ∈ N | x é par e x < 10",
            "B = {x, y, z}",
            "B = 2, 4, 6, 8"
        ],
        answer: "B = x ∈ N | x é par e x < 10",
        explanation: "Na representação por compreensão, usamos uma propriedade comum para definir os elementos."
    },
    {
        question: "O que representa a união de conjuntos A ∪ B?",
        options: [
            "Apenas os elementos comuns entre A e B",
            "Todos os elementos que estão em A ou em B",
            "Somente os elementos de A",
            "Somente os elementos de B"
        ],
        answer: "Todos os elementos que estão em A ou em B",
        explanation: "A união junta todos os elementos de A com os de B, sem repetir."
    },
    {
        question: "O que representa a interseção de conjuntos A ∩ B?",
        options: [
            "Elementos que estão em A ou em B",
            "Elementos que estão apenas em A",
            "Elementos comuns aos conjuntos A e B",
            "A união dos elementos de A e B"
        ],
        answer: "Elementos comuns aos conjuntos A e B",
        explanation: "A interseção mostra apenas os elementos que os dois conjuntos têm em comum."
    },
    {
        question: "A diferença A - B representa:",
        options: [
            "Os elementos que pertencem a B e não a A",
            "Os elementos comuns entre A e B",
            "Os elementos que pertencem a A e não a B",
            "A união dos elementos de A e B"
        ],
        answer: "Os elementos que pertencem a A e não a B",
        explanation: "A diferença A - B contém apenas os elementos exclusivos de A."
    },
    {
        question: "Se A = {1, 2, 3} e B = {2, 3, 4}, qual é A ∩ B?",
        options: ["{1}", "{1, 4}", "{2, 3}", "{1, 2, 3, 4}"],
        answer: "{2, 3}",
        explanation: "A interseção A ∩ B são os elementos que estão em ambos: 2 e 3."
    },
    {
        question: "Se A = {1, 2, 3} e B = {2, 3, 4}, qual é A ∪ B?",
        options: ["{1, 2, 3}", "{2, 3, 4}", "{1, 2, 3, 4}", "{1, 4}"],
        answer: "{1, 2, 3, 4}",
        explanation: "A união de A e B reúne todos os elementos de ambos, sem repetição."
    }
]  