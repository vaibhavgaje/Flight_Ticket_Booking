import React from "react";
import 'bootstrap';
import './css/footer.css'
export default function Footer(){
    
    return(
        
      
            <footer className="footer w-100 flex-shrink-0 mb-0">
    <div class="container py-4">
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white">FMS.</h5>
                <p class="small text-white">Your Palace in the Sky</p>
                <p class="small text-white mb-0">&copy; Copyrights. All rights reserved. <a class="text-danger" href="#">FMS.com</a></p>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Connect With Us</h5>
                <ul class="list-unstyled text-white">
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-linkedin-in"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                    <li><i class="fab fa-whatsapp"></i></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small text-white">Get Daily Update about our airline</p>
                <form action="#">
                    
                </form>
            </div>
        </div>
    </div>
</footer>
      

    
    );
    }