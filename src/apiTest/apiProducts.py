import requests
from bs4 import BeautifulSoup
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS

data = []

for i in range(1,17):
  url = 'https://icondenim.com/collections/tat-ca-san-pham?page='+str(i)
  page = requests.get(url)
  soup = BeautifulSoup(page.text, "html.parser")
  all_items = soup.find_all("div",class_="product-block item")
  for a in all_items:
    b= {}
    b['Title'] = a.find('div', class_='product-detail').find('a').attrs['title']
    b['Price'] = a.find('div', class_='product-detail').find('span').get_text(strip=True)
    b['Category'] = []
    b['Img'] = []
    b['Stock'] = 'Còn hàng'
    for img in a.find_all('img'):
      if (img.get('data-src') not in b['Img']) and img.get('data-src') is not None:
        b['Img'].append(img.get('data-src'))
    for cat in a.find('div', class_='product-detail').find('ul'):
      if cat.find('span')!=-1:
        b['Category'].append(cat.find('span').get('title', '').split('-')[0].strip())
    if len(a.find('p').find_all('span')) >1:
      b['Stock'] = 'Hết hàng'
    data.append(b)

df=pd.DataFrame(data)
df['Id'] = df.index+1
df=df[['Id', 'Title', 'Category', 'Price', 'Img', 'Stock']]
      

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET'])
def home():
  return "Nhập thêm /api/products để lấy api products nhé =))"
@app.route('/api/products', methods=['GET'])
def get_data():
  data = df.to_dict(orient='records')
  return jsonify(data)
if __name__ == '__main__':
  app.run(debug=True)
