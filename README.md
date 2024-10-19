# How to launch the app?

# Backend

```sh
cd backend
npm install

npm run build
npm run start
# Or "npm run start:dev"
```

# Frontend

```sh
cd frontend
npm install

npm run dev
# Or `npm run build && npm run preview`
# && operator works in bash like terminal, if you are using powershell
# run commands separatly

```

# Python script

```sh
cd TgBot

# Create a venv if you want (Optional)
python -m venv venv

# If you are not on windows and you prefer bash/zsh
# append .fish or .csh if you prefer fish or csh terminals respectively
source ./venv/bin/activate

# If you are on windows and you prefer cmd
./venv/Scripts/activate.bat
# If you are on windows and you prefer powershell
./venv/Scripts/Activate.ps1
# In case of an error run following command
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# Steps above are optional

pip install -r requirements.txt

python registration.py
```
