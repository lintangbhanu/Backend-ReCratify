const { sendResetEmail } = require('../src/services/emailServices');

const testEmail = 'lintangbhanucalogo@gmail.com'; 
const resetCode = '123456'; 

sendResetEmail(testEmail, resetCode)
    .then(() => {
        console.log('Test email sent successfully!');
})
    .catch((error) => {
        console.error('Error sending test email:', error);
});
