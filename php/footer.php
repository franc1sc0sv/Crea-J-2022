<?php
//Footer unico que sera añadido a cada pagina con el include

?>

<footer>
    <!-- <a href="#boddy" class="container_anchor"><img src="../img/iconos/arrow.png" alt=""></a> -->
    <button class="container_anchor" onclick=traductor() id="buttonChange"></button>
    <button class="containerDarkMode cambio" id="btnMode"></button>
    <button class="containerFlecha" id="flechaUp"></button>


    <div class="container">
        <div class="image-footer">
            <img src="../img/logo/Logo_Negativo.png" alt="Logo-footer" id="img-footer">
        </div>
        <div class="links-footer">
            <ul class="ul-footer">
                <li class="li-footer"><a href="../php/about_us.php" class="a-footer translateFooter">Nosotros</a></li>
                <li class="li-footer"><a href="..//php/comunity.php" class="a-footer translateFooter">Comunidad</a></li>
                <li class="li-footer"><a href="../php/concientizate.php" class="a-footer translateFooter">Concientízate</a></li>
                <li class="li-footer"><a href="../php/crear_evento.php" class="a-footer translateFooter">Eventos</a></li>
            </ul>
        </div>

        <div class="Rights-SocialIcons">
            <div class="hr-footer">
                <hr id="hr-footer">
            </div>

            <div id="R-icon">
                <div id="Rights">
                    <p id="p-footer" class="translateFooter">©2022 Todos los derechos reservados</p>
                </div>
                <div id="socialIcons-footer">
                    <img src="../img/iconos/Social Icons_fb.svg" alt="fbIcon" class="SocialIcons">
                    <img src="../img/iconos/Social Icons_tw.svg" alt="twIcon" class="SocialIcons">
                    <img src="../img/iconos/Social Icons_ig.svg" alt="igIcon" class="SocialIcons">
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="../js/translate.js" type="module"></script>
<script src="../js/scrollUp.js"></script>
<script src="../js/darkmode.js"> </script>
<script src="../js/IncribirseCancelar.js"></script>
<script src="../js/slider.js"></script>
<script src="../js/app_burger.js"> </script>
<script src="../js/app_profile.js"></script>
<script src="../js/model.js"> </script>
<script src="../js/preloader.js"></script>
<script src="../js/scroll_anchor.js"></script>

</body>

</html>