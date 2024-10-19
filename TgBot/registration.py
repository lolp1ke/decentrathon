from aiogram import Bot, Dispatcher
from aiogram.types import *
from aiogram.filters import Command
from aiogram import F
import main

TOKEN = "8091528973:AAH12wS_L26v6qWEix6c_cHQb9zK7xtJXDY"

bot = Bot(TOKEN)
dp = Dispatcher()

job_applicant = InlineKeyboardButton(text='job applicant 👤', callback_data= 'job applicant')
employer= InlineKeyboardButton(text='employer 🧑‍💼', callback_data= 'employer')
who_are_you = [[job_applicant, employer]]

step_1 = InlineKeyboardButton(text = 'step 1️⃣', callback_data = 'step1')
step_2 = InlineKeyboardButton(text = 'step 2️⃣', callback_data = 'step2')
step_3 = InlineKeyboardButton(text = 'step 3️⃣', callback_data = 'step3') 

steps = [[step_1, step_2, step_3]]

cont = InlineKeyboardButton(text = 'continue', callback_data = 'employer')
finish = InlineKeyboardButton(text = 'finish', callback_data = 'finish')
are_you_finish =[[cont, finish]]

access_to_anylyse_cv = False 
is_step_1 = False
is_step_2 = False
is_step_3 = False

# Реагирует на /start и /continue, 
@dp.message(Command(commands=['start']))
async def start(msg:Message):
    global access_to_anylyse_cv
    await msg.answer("Hi it is iTinder, lets register to our platfrom")
    await msg.answer("Are you job applicant 👤 or employer 🧑‍💼", reply_markup = InlineKeyboardMarkup(inline_keyboard = who_are_you))
    access_to_anylyse_cv = True

@dp.callback_query(F.data.contains('job applicant'))
async def registraion_of_applicant(query: CallbackQuery):
    global access_to_anylyse_cv
    await query.message.delete()
    await query.message.answer('Send CV in pdf format please')
    access_to_anylyse_cv = True 

@dp.message(F.document)
async def analyse_cv(msg: Message):
    global access_to_anylyse_cv
    cv = msg.document
    name = cv.file_name

    if(name.endswith('.pdf') and access_to_anylyse_cv):
        await bot.download(file = cv, destination = "user_cv.pdf")
        main.send_to_database(tg_id = msg.from_user.id, user_type = 'job applicant')
        await msg.answer("You have been sign in")

    elif(access_to_anylyse_cv):
        await msg.answer("It is not pdf file")

    else:
        await msg.answer("Before start, are you job applicant 👤 or employer 🧑‍💼", reply_markup = InlineKeyboardMarkup(inline_keyboard = who_are_you))

    access_to_anylyse_cv = False

@dp.callback_query(F.data.contains('employer'))
async def registraion_of_employer(query: CallbackQuery):
    await query.message.answer("To register company there are 3 steps: \n\
    1) Send Name of Company \n\
    2) Send Specification of Company \n \
    3) Send Email of Company \n", reply_markup = InlineKeyboardMarkup(inline_keyboard = steps))

@dp.callback_query(F.data.contains('step1'))
async def step_1(query: CallbackQuery):
    global is_step_1 
    await query.message.delete()
    await query.message.answer("You on step 1, please send name of Company: ")
    is_step_1 = True

@dp.callback_query(F.data.contains('step2'))
async def step_2(query: CallbackQuery):
    global is_step_2 
    await query.message.delete()
    await query.message.answer("You on step 2, please send specification of Company: ")
    is_step_2 = True

@dp.callback_query(F.data.contains('step3'))
async def step_3(query: CallbackQuery):
    global is_step_3
    await query.message.delete() 
    await query.message.answer("You on step 3, please send email of Company: ")
    is_step_3 = True

@dp.callback_query(F.data.contains('finish'))    
async def finish_employer_registration(query: CallbackQuery):
    await query.message.delete()
    await query.message.answer('You finished registration of company')

@dp.message()
async def input_company_information(msg: Message):
    global is_step_1, is_step_2, is_step_3
    await msg.delete()

    if(is_step_1):
        name_of_company = msg.text
        is_step_1 = False
        main.fill_company_dictinoary(key = 'name', value = name_of_company)

    elif(is_step_2):
        specification_of_company = msg.text
        is_step_2 = False
        main.fill_company_dictinoary(key = 'specialization', value = specification_of_company)

    elif(is_step_3):
        email_of_company = msg.text
        is_step_3 = False

        main.fill_company_dictinoary(key = 'email', value = email_of_company)
        main.send_to_database(tg_id = msg.from_user.id, user_type = 'employer')
        await msg.answer("You finished step 3, are you want to continue or finish registration", reply_markup = InlineKeyboardMarkup(inline_keyboard = are_you_finish))
        return 0
    
    await msg.answer("To register company there are 3 steps: \n\
    1) Send Name of Company \n\
    2) Send Specification of Company \n \
    3) Send Email of Company \n", reply_markup = InlineKeyboardMarkup(inline_keyboard = steps))

if __name__ == '__main__':
    dp.run_polling(bot)
