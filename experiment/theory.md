### Theory
<p><span style="background-color: #ffffff;">To Verify  Millman's Theorem.  &nbsp;</span></p>
							<p style="text-align:justify">This theorem is a combination of Thevenin's and Norton's theorems. When a number of voltage sources (`V<sub>1</sub>`,`V<sub>2</sub>`,...,`V<sub>n</sub>`) are in parallel having internal resistances (`R<sub>1</sub>`,`R<sub>2</sub>`,...,`R<sub>n</sub>`) respectively, the arrangement can be replaced by a single equivalent voltage source `V` in series with an  equivalent series resistance `R` as given below in Fig.1 and Fig.2.</p>
							<br><figure style="text-align:center">
									  <img alt="" src="images/millman_theory1.jpg" style="width:500px;height:210px;">
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<figcaption> Fig.1&nbsp;A number of voltage source fading power to a load</figcaption>
									</figure>
									<br>
									<br><figure style="text-align:center">
									  <img alt="" src="images/Millman's_theory2.jpg" style="width:380px;height:210px;">
									  <figcaption> Fig.2&nbsp;Equivalent voltage and resistance of the source network following millman's theorem</figcaption>
									</figure>
									<br>
									<br>
							        <p>As per Millman's Theorem ,</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$V = (+- V_1G_1 +- V_2G_2 +-.........+- V_nG_n)/(G_1+G_2+.........+G_n)$$</p><br>
									<p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; where $$G_i = 1/R_i$$,&nbsp;&nbsp;&nbsp; $$i = 1,2,....,n$$</p><br></p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$R=1/G=1/(G_1+G_2+.........+G_n)$$</p><br></p>
							<p style="text-align:justify">This voltage represents the thevenin's voltage `V`. The resistance `R` can be found , as usual , by replacing each voltage source by a short circuit. If there is a load resistance R<sub>L</sub> across the terminals A and B , then the load current I<sub>L</sub>` is given by</p> 
							        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$I_L=V/(R+R_L)$$</p>
						<br>
			<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>			
