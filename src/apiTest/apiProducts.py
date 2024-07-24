import requests
from bs4 import BeautifulSoup
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS

data = []

for i in range(1,16):
  url = 'https://icondenim.com/collections/tat-ca-san-pham?page='+str(i)
  page = requests.get(url)
  soup = BeautifulSoup(page.text, "html.parser")
  all_items = soup.find_all("div",class_="product-detail")
  for a in all_items:
    b= {}
    b['Title'] = a.find('a').attrs['title']
    b['Price'] = a.find('span').get_text(strip=True)
    b['Category'] = []
    b['Img'] = []
    b['Stock'] = 'Còn hàng'
    for x in a.find('ul'):
      b['Category'].append(x.find('span').get('title', '').split('-')[0].strip())
      b['Img'].append(x.find('img').attrs['data-src'])
    if a.find(class_='sold-out-tag') is not None:
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
