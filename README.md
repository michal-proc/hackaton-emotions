# Emotions - Mental Well-being and Stress Management App

**Emotions** is an application designed to help users monitor and improve their mental well-being and stress levels. It facilitates communication with friends, allows users to record daily gratitudes to build optimism, and uses a trained AI model to analyze the user's emotions based on facial expressions captured in photos. The data is saved and presented to the user in the form of charts.

## Key Features

- **Mood Analysis**: Uses AI to assess the user's mood from photos.
- **Gratitude Journal**: Allows users to log daily gratitudes to foster optimism.
- **Stress Monitoring**: Provides insights into stress levels over time through visual data.
- **Communication**: Helps users connect with friends to improve well-being.

## Technologies Used

- **React Native**: For building the cross-platform mobile application.
- **Python Flask**: For handling backend logic and API requests.
- **Artificial Intelligence**: A trained AI model to analyze facial expressions and detect emotions.

## Prerequisites

Make sure you have the following installed:

### Frontend (React Native)
- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **Expo CLI**: For running and building React Native apps.
   ```bash
   npm install -g expo-cli
   ```

### Backend (Python Flask)
- **Python 3.7+**: Ensure Python is installed on your system.
- **Flask**: Install Flask by running the following command:
   ```bash
   pip install Flask
   ```

## Installation and Setup

### 1. Clone the repository:

```bash
git clone <repository-url>
cd hackaton-emotions-master
```

### 2. Setting up the Backend:

1. Navigate to the backend directory:
   ```bash
   cd python-flask-backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask server:
   ```bash
   python app.py
   ```

The backend should now be running at `http://localhost:5000`.

### 3. Setting up the Frontend:

1. Navigate to the frontend directory:
   ```bash
   cd ../react-native-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React Native app:
   ```bash
   expo start
   ```

4. Open the Expo app on your phone and scan the QR code to run the app on your device.

## How to Use the App

- **Analyze Mood**: Take a photo or upload an existing one for mood analysis.
- **Log Gratitude**: Use the gratitude journaling feature to log your thoughts daily.
- **Monitor Stress**: View charts displaying your stress levels and mood over time.

## License

This project is open-source and available under the MIT License.
