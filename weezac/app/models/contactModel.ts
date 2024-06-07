import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var validateEmail = function(email:string) {
  console.log(email);
  
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email)
};

var validatePhone = function(phone:string) {
  console.log(phone);
  
  var re = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return re.test(phone)
};

var validateUrl = function(url:string) {
  console.log(url);
  
  var re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return re.test(url)
};

interface contactUs{
  name: string,
  email: string,
  date: Date,
  phone: string,
  organization: string,
  website: string,
  features: Object,
  target: string,
  designPreferences: Object,
  comments: string,
}

const contact = new Schema<contactUs>({
  name: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Email address is required'],
    validate: [validateEmail, 'Email address is required'],
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email address is required']
  },
  phone: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Phone number is required'],
    validate: [validatePhone, 'Phone number is required'],
    match: [/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Phone number is required']
  },
  organization: String,
  website: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Valid URL is required'],
    validate: [validateUrl, 'Valid URL is required'],
    match: [/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Valid URL is required']
  },
  features: Object,
  target: String,
  designPreferences: Object,
  comments: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.models.ContactUs|| mongoose.model('ContactUs', contact);

export default Contact;
