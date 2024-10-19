# How to launch the app?

### Backend

```sh
cd backend
npm install

npm run build
npm run start
# Or "npm run start:dev"
```

### Frontend

```sh
cd frontend
npm install

npm run dev
# Or `npm run build && npm run preview`
# && operator works in bash like terminal, if you are using powershell
# run commands separatly

```

### Python script

---

#### Prerequisites:

Windows users will have to build or download poppler for Windows. I recommend @oschwartz10612 version which is the most up-to-date. You will then have to add the bin/ folder to PATH or use poppler_path = r"C:\path\to\poppler-xx\bin" as an argument in convert_from_path.

Python-tesseract requires Python 3.6+

You will need the Python Imaging Library (PIL) (or the Pillow fork). Please check the Pillow documentation to know the basic Pillow installation.

Install Google Tesseract OCR (additional info how to install the engine on Linux, Mac OSX and Windows). You must be able to invoke the tesseract command as tesseract. If this isn’t the case, for example because tesseract isn’t in your PATH, you will have to change the “tesseract_cmd” variable pytesseract.pytesseract.tesseract_cmd. Under Debian/Ubuntu you can use the package tesseract-ocr. For Mac OS users. please install homebrew package tesseract.

---

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
