# פתרונות - Git Branches

---

## פתרון תרגיל 1

1. Branch זה ענף נפרד מהענף main, אז עכשיו אם יש לי כמה חבר'ה עובדים על פיטצרים נפרדים אז אם כולם יעבדו על אותו branch אז יהיה קשה לטפל ב conflit.
2. main זה branch העיקרי ששם אחרי כל הבדיקות שעשו לקוד ממזגים אותו ל MAIN (Merge), branch Feature זה ענף שבו עושים את כל הכתיבת קוד.
3. Branch הוא מיוצר מצביע חדש במקום מסויים ומשם הוא עושה שמירה של Commits בנפרד לענפים אחרים כמובן עד שממזגים ל main.

---

## פתרון לתרגיל 2

```bash
1. git switch -c fix/login-error
2. git switch fix/login-error
3. git checkout main
```

---

## פתרון לתרגיל 3

1. HEAD זה אומר על איזה branch זה אני עומד.
2. HEAD יצביע על main (HEAD -> main......).
3. לא נכון, כמו שאמרנו בסעיף 1 HEAD מצביע על branch הנוכחי שהוא נמצא בו.

---

## פתרון לתרגיל 4

1. git checkout main
2. git checkout main -> git merge feature/signup-form
3. git -D feature/signup-form
4. כי ברגע שמזגנו את הפיטצ'ר ל main אז אין פואנטה להשאיר כי אם יעשו פקודה של הצגת branches אז נקבל הרבה מאוד branches שיש כולל מה שעשות וזה יהיה קשה לדעת מה צריך למזג.

---

## פתרון לתרגיל 5

1. git checkout -b feature/notifications
2. git add . -> git commit -m "Add notification bell icon"
3. git branch
4. git checkout main /
5. git checkout main (מוודא שאנחנו בענף הראשי) -> git merge feature/notifications

---
