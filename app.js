{

    products.map((product)=>{

      return(

      <Products serial={product.sr} name={product.title} key={product.sr}></Products>

      )

    })

  }