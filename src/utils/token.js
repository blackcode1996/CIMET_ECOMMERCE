export default function token(){
   const token = localStorage.getItem('token') ? true : false 

   return token

}