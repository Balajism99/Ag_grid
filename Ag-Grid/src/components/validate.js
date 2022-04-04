export default function validateInfo(formData) {
    let errors = {};
  
    if (!formData.name) {
      errors.name = 'Name cannot be empty';
    }else if(formData.name.length<=3) {
        errors.name = 'Name should be greater than 3 letters';
      }
  
  
    if (!formData.email) {
      errors.email = 'Email cannot be empty';
    } 
    
    if (!formData.jobTitle) {
      errors.jobTitle = 'JobTitle cannot be empty';
    } 
    
    if (!formData.company) {
      errors.company = 'Company cannot be empty';
    } 
    
    if (!formData.date) {
      errors.date = 'Date cannot be empty';
    } 
    
    if (!formData.number) {
      errors.number = 'Salary cannot be empty';
    } 
    
    if (!formData.phone) {
      errors.phone = 'Phone cannot be empty';
    } 
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid';
      }
    return errors;
  }