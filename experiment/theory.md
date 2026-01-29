### Theory
<p><span style="background-color: #ffffff;">To Verify  Millman's Theorem.  &nbsp;</span></p>
							<p style="text-align:justify">This theorem is a combination of Thevenin's and Norton's theorems. 
							When a number of voltage sources (`V<sub>1</sub>`,`V<sub>2</sub>`,...,`V<sub>n</sub>`) are in parallel having internal resistances (`R<sub>1</sub>`,`R<sub>2</sub>`,...,`R<sub>n</sub>`) respectively, 
							the arrangement can be replaced by a single equivalent voltage source `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">V<sub>m</sub></span>` 
							in series with an equivalent series resistance `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">R<sub>m</sub></span>` as given below in Fig.1 and Fig.2.</p>
							<br><figure style="text-align:center">
									  <img alt="" src="images/millman_theory1.jpg" style="width:500px;height:210px;">
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<figcaption> Fig.1&nbsp;A number of voltage source fading power to a load</figcaption>
									</figure>
									<br>
									<br><figure style="text-align:center">
									  <img alt="" src="images/Millman_s_theory2.jpg" style="width:380px;height:210px;">
									  <figcaption> Fig.2&nbsp;Equivalent voltage and resistance of the source network following millman's theorem</figcaption>
									</figure>
									<br>
									<br>
							        <p>As per Millman's Theorem ,</p>
									
$$V_m = \frac{(+- V_1G_1 +- V_2G_2 +-.........+- V_nG_n)}{(G_1+G_2+.........+G_n)}$$
									
where $$G_i = \frac{1}{R_i}$$,&nbsp;&nbsp;&nbsp; $$i = 1,2,....,n$$
									
$$R_m = \frac{1}{G} = \frac{1}{(G_1+G_2+.........+G_n)}$$
									
<p style="text-align:justify">This voltage represents the Millman's equivalent voltage `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">V<sub>m</sub></span>`. 
The resistance `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">R<sub>m</sub></span>` can be found , as usual , by replacing each voltage source by a short circuit. 
If there is a load resistance `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">R<sub>L</sub></span>` across the terminals A and B , 
then the load current `<span style="font-family:'Bodoni MT';font-style:italic;font-size:16px">I<sub>L</sub></span>` is given by</p> 
							       
$$I_L = \frac{V_m}{(R_m + R_L)}$$
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>			
