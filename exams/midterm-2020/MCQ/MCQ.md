All the multiple choice questions pertain to the same example. You may
find it useful to draw its DOM tree (though this is not required to
answer the questions below).


```html
<html>
<head>
    <style>
        #one { color: red; }            /* Rule #1 */

        .A { color: blue; }             /* Rule #2 */

        div.A div.B { color: green; }   /* Rule #3 */

        div.A #five { color: organe; }  /* Rule #4 */
    </style>
</head>
<body>
    <div id="one" class="A">
        <h1> This </h1>
        <div id="two" class="B">
            <h2> is </h2>
            <div id="three" class="A">
                <h3 id="six"> a </h3>
                <div id="four" class="B">
                    <p id="five">
                        test webpage.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

**Q1a. Which of the rules has the highest priority for H1?**

- [x] #one { color: red; }

- [ ] .A { color: blue; }

- [ ] div.A div.B { color: green; }

- [ ] div.A #five { color:orange; }


**Q1b. Which of the rules has the highest priority for H2?**

- [ ] #one { color: red; }

- [ ] .A { color: blue; }

- [x] div.A div.B { color: green; }

- [ ] div.A #five { color:orange; }

**Q1c. Which of the rules has the highest priority for H3?**

- [ ] #one { color: red; }

- [x] .A { color: blue; }

- [ ] div.A div.B { color: green; }

- [ ] div.A #five { color:orange; }

**Q1d. Which of the rules has highest priority for p?**

- [ ] #one { color: red; }

- [ ] .A { color: blue; }

- [ ] div.A div.B { color: green; }

- [x] div.A #five { color:orange; }

---

**Q2a. Assume we add the following CSS rule to the above example `#two .B
{ color:blue; }`. Which of the elements undergo a change in color
as a result of adding this rule?**

- [ ] H1

- [ ] H2

- [ ] H3

- [ ] p

- [x] None of the above

**Q2b. Now assume that after adding the rule `#two .B { color:blue;}`,
we remove CSS rule #4. Now, which of the elements will undergo a
change in color?**

- [ ] H1

- [ ] H2

- [ ] H3

- [x] p

- [ ] None of the above