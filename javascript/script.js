// option menu
const menuBtn = document.getElementById("menu");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");


      menuBtn.addEventListener("click",()=>{
        sidebar.classList.add("active");
});
        closeBtn.addEventListener("click",()=>{
            sidebar.classList.remove("active");
        
      })
    });