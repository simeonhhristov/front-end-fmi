# Контрол 2 - JavaScript

Направете работещ калкулатор, който пази история за калкулациите си.

![image](https://user-images.githubusercontent.com/5821279/146007435-25778a9a-e824-4e63-95d2-e1ad264465de.png)


Като заготовка, вие ще получите HTML и CSS върху които вие трябва да имплементирате функциите които един калкулатор предоставя.


Приложението ви трябва да има следната фунцкионалност:
- При написване (натискане на последователни клавиши) на число то да бъде показано в инпут-а.
- При натискане на функция с два параметъра, тя да бъде маркирана и калкулатора да бъде в очакване на следващо число. (да ѝ се добави стил `border: 1px solid black`)
- След въвеждане на второто число и натискане на бутона равно(=), след което резултата отново да бъде записан в инпута.
- Ако се използва втори оператор преди равното, да се сметне резултата от първото действие, да се маркира новата функция и да се вузуализира резултата в инпут полето
- При натискане на функция с един параметър(корен, повдигане на втора степен), резултата да бъде показан в инпута. (натискаме 2, натискаме квадрат, в инпут полето става 4)
- Верижно смятане трябва да бъде позволено(Пример 2 + 2 = 4, - 3 = 1, * 5 = 5).
- `C` трябва да изтрива съдържанието на инпута.
- Историята на калкулациите трябва да бъде визуализирана в секцията посочена за това(под заглавието, за история на калкулациите). Тя трябва да бъде обновявана при всяко обновяване на инпута(натискане на равно, или една от функциите с един параметър).
- Бутона за изтриван трябва да зачиства нашата история

## Hints
  - вижте какво прави `eval()`
  - забележете как са изобразени операциите и ги преобразувайте `"÷" => "/"`

## Бонус точки
  - Имплементирайте уголемяване на калкулатора след натискане на зеления бутон в хедър частта му. Нека размера на широчината и размерът на височината му се удвоят (234px х 322px) => (468px х 644px)
  - Уголемяването да се случи с анимация и след като анимацията приключи да се изведе `alert` с текст `Заслужавам си шестицата!`
  - когато натиснете символ от клавиатурата (например / * + -) да се визуализира че се прилага дадената операция, но да не се вижда знака на операцията в инпут полето

![image](https://user-images.githubusercontent.com/5821279/146006565-ad679265-e2b9-45d2-9e69-7ef0b31ff437.png)

![image](https://user-images.githubusercontent.com/5821279/208459375-a09c4082-012c-4a78-a893-8ab9a30bdcd9.png)
