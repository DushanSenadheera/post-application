### How to run the application locally
1. Clone the repository
```bash
git clone https://github.com/DushanSenadheera/post-application.git
```
2. Go to the project root directory and run the following command in the terminal to install the required packages
```bash
./requirements.sh
```
3. Add the following environment variables to the server directory by creating `.env` file in root of the server 
```bash
PORT = '5000'
MONGO_DB_URI = 'MONGODB_CONNECTION_STRING'
```
4. Run the following command in the terminal to start the application
```bash
./run.sh
```