

function Header({money,total}) {
    return (
      <>
            <div >
                {total>0 && money-total !==0 &&(
                    <>
                        Harcayacak {money-total}$ paranız kaldı
                    </>
                )}
                {total ===0 &&(
                    <>
                        Harcayacak {money} paranız var
                    </>
                )}
                {money-total===0 &&(
                    <>
                    Paran bitti.!
                    </>
                )}
                   

            </div>
      </>
      
    );
  }
  
  export default Header;
  