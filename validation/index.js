

exports.runValidation = (schema)=>{
    return(req, res, next) => {
        //validation using joi
        //step1: create a schema
        
        //step 2: validate data using schema
        const { error } = schema.validate(req.body, {
          abortEarly: false,
          errors: {
            wrap: {
              label: "",
            },
          },
        });
      
        if (error) {
          const errorList = error.details.map((err) => err.message);
          return res.status(201).json({
            message: "invalid input",
            errorList,
          });
        }
        next();
      };
      
}