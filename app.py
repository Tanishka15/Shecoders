#from flask import Flask, request, jsonify
'''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

app = Flask(__name__)

# Load and preprocess data
def load_and_preprocess_data():
    df = pd.read_csv('mock_fashion_data_uk_us.csv')
    df.drop(['Product Name', 'Description', 'Review Count', 'Total Sizes', 'Purchase History', 'Fashion Magazines',
             'Time Period Highest Purchase', 'feedback'], axis=1, inplace=True)
    df['Age'] = df['Age'].astype(int)
    categorical_columns = ['Brand', 'Category', 'Style Attributes', 'Available Sizes', 'Color', 'Fashion Influencers', 'Season', 'Customer Reviews', 'Social Media Comments']
    df = pd.get_dummies(df, columns=categorical_columns, drop_first=True)
    return df

# Train model
def train_model(df):
    corr_matrix = df.corr()
    correlation_threshold = 0.001
    relevant_features = corr_matrix.index[abs(corr_matrix['Rating']) > correlation_threshold]
    df_selected = df[relevant_features]

    X = df_selected.drop('Rating', axis=1)
    y = df_selected['Rating']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    model = LinearRegression()
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    print(f'Mean Squared Error: {mse}')
    print(f'R² Score: {r2}')
    
    return model, X_train

# Example route
@app.route('/')
def home():
    return "Style Recommendation API"

@app.route('/api/recommend', methods=['POST'])
def recommend():
    data = request.json
    # Extract data from the request
    gender = data.get('gender')
    height = data.get('height')
    weight = data.get('weight')
    bust = data.get('bust')
    waist = data.get('waist')
    hip = data.get('hip')
    chest = data.get('chest')
    color_preference = data.get('color_preference')
    style_preference = data.get('style_preference')
    item_preference = data.get('item_preference')

    # Implement the recommendation logic here
    body_type = determine_body_type(gender, height, weight, bust, waist, hip, chest)
    recommendations = generate_recommendations(color_preference, style_preference, item_preference, body_type)
    
    return jsonify({
        'body_type': body_type,
        'recommendations': recommendations
    })

def determine_body_type(gender, height, weight, bust, waist, hip, chest):
    if gender == 'women':
        return determine_women_body_type(bust, waist, hip)
    elif gender == 'men':
        return determine_men_body_type(chest)
    return 'Unknown'

def determine_women_body_type(bust, waist, hip):
    # Add your body type determination logic
    return 'Hourglass'

def determine_men_body_type(chest):
    # Add your body type determination logic
    return 'Rectangle'

def generate_recommendations(color_preference, style_preference, item_preference, body_type):
    # Implement recommendation generation logic here
    return [
        {
            'name': 'Ethnic Black Skirt',
            'image': 'EthnicBlackSkirt.png',
            'specifications': 'Material: Cotton, Length: Knee-Length, Pattern: Floral',
            'influencers': ['Influencer 1', 'Influencer 2']
        },
        {
            'name': 'Ethnic Black Skirt 2',
            'image': 'Ethnic_black_skirt_2.jpg',
            'specifications': 'Material: Silk, Length: Ankle-Length, Pattern: Geometric',
            'influencers': ['Influencer 3', 'Influencer 4']
        }
    ]

if __name__ == '__main__':
    df = load_and_preprocess_data()
    model, X_train = train_model(df)
    app.run(debug=True)'''
    
    
from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load the dataset
data = pd.read_csv('mock_fashion_data_uk_us.csv')

# Function to recommend outfits
def recommend_outfits(style_attribute, color, available_sizes, top_n=5):
    # Filter the dataset based on the given style attribute, color, and available sizes
    filtered_data = data[
        (data['Style Attributes'].str.contains(style_attribute, case=False, na=False)) &
        (data['Color'].str.contains(color, case=False, na=False)) &
        (data['Available Sizes'].apply(lambda x: any(size in x for size in available_sizes)))
    ]
    
    # Rank the filtered results based on rating and review count
    filtered_data['Rank'] = filtered_data.apply(lambda x: x['Rating'] * x['Review Count'], axis=1)
    ranked_data = filtered_data.sort_values(by='Rank', ascending=False)
    
    # Get the top N recommendations
    top_recommendations = ranked_data.head(top_n)
    
    # Select relevant columns for the recommendations
    recommendations = top_recommendations[['Product Name', 'Price', 'Brand', 'Category', 'Description', 'Rating', 'Review Count', 'Available Sizes', 'Color', 'Fashion Influencers']]
    
    return recommendations

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for handling form submission and displaying recommendations
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    style_attribute = request.form['style_attribute']
    color = request.form['color']
    available_sizes = request.form.getlist('sizes')

    top_five_outfits = recommend_outfits(style_attribute, color, available_sizes)

    return render_template('recommendations.html', recommendations=top_five_outfits.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
