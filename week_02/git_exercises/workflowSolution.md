# פתרונות לתרגילים - Git Workflow

---

## פתרון לתרגיל 1

1. develop זה ענף ביניים ששם שמים עושים את כל הפיתוח עד שמסיימים איתו.
2. ב- develop או main.
3. משתמשים ב MAIN ושם עושים את כל ה branch בגלל וזה סתם דברים קטנים.

---

## פתרון לתרגיל 2

1. git stash
2. git pop stash
3. stash זה שומר את הנתונים בצד ולעמות זאת commit שומר את זה להיסטוריה של הכל.

---

## פתרון לתרגיל 3

1. git revert -> זה מבטל אותו אבל לא מוחרק את הקומיט הזה כלומר שאם אי פעם נרצה לחזור לזה אז לא נוכל לדעת.
2. git revert עושה קומיט חדש שמבטל את השינויים הקודמים בלי למחוק את ההיסטוריה לעומת git reset מוחק אותו מההיסטוריה.
3. git reset, כי אנחנו לא רוצים שישאר לנו הקומיט השגוי

---

## פתרון לתרגיל 4

1. טבלת קומיטים
   | פעולה | הודעה |
   |---|---|
   | א | git commit -m "feat: add feature SMS notification" |
   | ב | git commit -m "fix: logging to the system" |
   | ג | git commit -m "chore: update package version |

2. אם יש באג כלשהו ואחד מאנשי צוות מזהה ממה זה נהיה אז הוא יכול לדעת באיזה קומיט וע"פ זה לחזור לקומיט שהיה לפני.
3. refactor זה רק משנה את המבנה אבל זה לא משנה את הקוד או את התכנית.

---

## פתרון לתרגיל 5

1. ניצא מ develop
2. git stash
3. git pop stash
4. git add . -> git commit -m "feat: add feature export to PDF"
5. git revert <ID COMMIT>

---
