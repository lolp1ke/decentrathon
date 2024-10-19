import pytesseract
from PIL import Image
from pdf2image import convert_from_path
import cohere
import requests

template_dictionary = {"tg_id": None, "user_type": None, "name": None,"email": None, "specialization": None, "tags": None}

def pdf_to_text():
  Image.MAX_IMAGE_PIXELS = 2000000000
  pages = convert_from_path('user_cv.pdf', 500)
  all_text = ''

  for page in pages:
    page.save('out.png', 'PNG')
    # Open the image file
    image = Image.open('out.png')

    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract' #Add to PATH
    # Perform OCR using PyTesseract
    text_of_page = pytesseract.image_to_string(image, lang = 'eng')
    all_text += text_of_page
    return all_text
    
def analyse_cv():
  text_of_cv = pdf_to_text()
  output_format = '[Name(str double quotes): string, Email(str): string, Major(str): list of strings(no more than 20 characters), Programing skills: list of strings (no more than five elements)]'
  promt = "Please be brief. Anylyse next CV, make ouptut in format python dictionary. \
          Output dictionary and with elements that mentined in blueprint, \
          Next given sample of output format and then after given cv text" 
  message = "Send only dictionary, not nothing else. Here is text of cv:" + text_of_cv
  response = co.chat(
    model="command-r-plus",
    chat_history=[
    {"role": "USER", "text": "Yout give a lot of unnesecary informatiom " + promt},
    {"role": "CHATBOT", "text": "Please send blueprint of output format"},
    {"role": "USER", "text": output_format},
    {"role": "CHATBOT", "text": "Please send text of cv"}
  ],  
    message = message,
  )
  answer = response.text

  job_applicant_dictionary = template_dictionary
  temproary_dictionary = eval(answer)
  job_applicant_dictionary['user_type'] = 'job applicant' 
  job_applicant_dictionary["name"] = temproary_dictionary["Name"]
  job_applicant_dictionary["email"] = temproary_dictionary["Email"]
  job_applicant_dictionary['specialization'] = temproary_dictionary['Major']
  job_applicant_dictionary['tags'] = temproary_dictionary['Programing skills']
  return job_applicant_dictionary



def send_to_database(user_type, tg_id):
  if(user_type):
    user_dictinoary = analyse_cv()
  else:
    pass

  user_dictinoary["ti_id"] = tg_id
  r = requests.post("http://127.0.0.1:5000/user/create", data = user_dictinoary)
  if(r.status_code == 201):
    print("Sended")
  else:
    print("Error")

co = cohere.Client('AH0agiBtbhKCBApQrt9OscLj22VjX6JV0O9KBwrN')

