

const errorRate = async (req, res, next) => {
   try{
      const rate = Math.floor( Math.random() * 100 ) + 1;
      if ( rate > 10 ) {
         next();
      }else{
         throw { status: 500, error: 'Ocurrio un error en el servidor', message: `Rate 10%` }
      }
   }catch(e){
      console.log(e)
      next(e);
   }
}

module.exports = errorRate