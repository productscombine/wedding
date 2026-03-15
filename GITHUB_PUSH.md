# Как перенести проект в репозиторий на GitHub

## 1. Создайте репозиторий на GitHub

- Зайдите на https://github.com/new (или если вы KirGroup — https://github.com/KirGroup?tab=repositories → New).
- Имя репозитория: например **site** (или любое).
- **Не** ставьте галочки "Add README" и ".gitignore" — у вас уже есть код.
- Нажмите **Create repository**.

## 2. Подключите репозиторий и отправьте код

В терминале (в папке проекта) выполните по очереди.

Подставьте вместо **USER** и **REPO** свои данные:
- **USER** — ваш логин (например KirGroup) или организация.
- **REPO** — имя репозитория (например site).

```powershell
cd c:\Users\Darya\Downloads\site

git remote add origin https://github.com/USER/REPO.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

**Пример для репозитория KirGroup/site:**
```powershell
git remote add origin https://github.com/KirGroup/site.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

При первом `git push` браузер или Git могут запросить вход в GitHub (логин/пароль или токен).

---

Если репозиторий уже создан и вы знаете его URL — напишите его, и команды можно будет подставить точнее.
