<!doctype html>
<html>
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<?php include("./partials/google.php") ?>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta keywords="septic faq, faq, septic, Septic Frequently asked questions">
		<meta description="Frequently asked questions">
		<title>FAQ</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap-4.4.1.css" rel="stylesheet">
	</head>
	<body>
		<?php include("./partials/nav.php"); ?>
		<h1 class="text-center jumbotron">G&amp;C Frequently Asked Questions</h1>
		<main>
			<div class="container">
				<div id="accordion">
					<div class="card text-left">
					<div class="card-header" id="qOne">
					  <h5 class="mb-0">
						<button class="btn btn-link btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						  What is a Septic System?
						</button>
					  </h5>
					</div>
					<div id="collapseOne" class="collapse show" aria-labelledby="qOne" data-parent="#accordion">
					  <div class="card-body">
						A Septic system is used by homes and businesses that are not connected to municipal water and sewer systems. The septic system treats the wastewater similarly to what would be done in a wastewater treatment plant. The most common type of septic system uses both natural and technological processes to treat the waste from plumbing fixtures in the home or business such as toilets, showers, sinks, or laundry.
					  </div>
					</div>
				  </div>
				  <div class="card text-left">
					<div class="card-header" id="qTwo">
					  <h5 class="mb-0">
						<button class="btn btn-link collapsed btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						  How often should I get my system serviced?
						</button>
					  </h5>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="qTwo" data-parent="#accordion">
					  <div class="card-body">
						How often the system should be serviced depends mostly on the volume of waste that is produced. For larger families, pumping more often is recommended. According to the <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank">Environmental Protection Agency(EPA)</a> the average septic system should be inspected and serviced every 3-5 years.
					  </div>
					</div>
				  </div>
				    <div class="card text-left">
					<div class="card-header" id="qThree">
					  <h5 class="mb-0">
						<button class="btn btn-link collapsed btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						  Where are my lids located?
						</button>
					  </h5>
					</div>
					<div id="collapseThree" class="collapse" aria-labelledby="qThree" data-parent="#accordion">
					  <div class="card-body">
						You may notice small lids near the drainage line from your house that are about 10 inches in diameter. These are not the lids that will be used to service your tank. There is one lid above the solid side of the tank, and one lid over the fluid side of the tank. These are usually located 18-24 inches below the ground. They are also about 2 feet in diameter, the size of a normal man-hole cover.
					  </div>
					</div>
				</div>
				<div class="card text-left">
					<div class="card-header" id="qFour">
					  <h5 class="mb-0">
						<button class="btn btn-link collapsed btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
						  Does all my wastewater go into the septic system?
						</button>
					  </h5>
					</div>
					<div id="collapseFour" class="collapse" aria-labelledby="qFour" data-parent="#accordion">
					  <div class="card-body">
						  Most counties require that all the wastewater from your home or business does go into your septic system. If it doesn't, you may need to call a plumber to get that resolved.
					  </div>
					</div>
				</div>
				<div class="card text-left">
					<div class="card-header" id="qFive">
					  <h5 class="mb-0">
						<button class="btn btn-link collapsed btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
						  What is safe to put in the septic system?
						</button>
					  </h5>
					</div>
					<div id="collapseFive" class="collapse" aria-labelledby="qFive" data-parent="#accordion">
					  <div class="card-body">
						  As a rule, as little as possible solid waste should go into the septic system. You should also not dump cooking grease or oil, garbage, feminine hygiene products, or pharmaceuticals down the drain. The only things taht should go down the drain or toilet should be human waste, toilet paper, and as little food as possible.
					  </div>
					</div>
				</div>
				<div class="card text-left">
					<div class="card-header" id="qSix">
					  <h5 class="mb-0">
						<button class="btn btn-link collapsed btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
						  How can I tell if my system is failing?
						</button>
					  </h5>
					</div>
					<div id="collapseSix" class="collapse" aria-labelledby="qSix" data-parent="#accordion">
					  <div class="card-body">
						  There are a few signs that your system may be failing.
						  <ul>
							  <li>System backing up into the house</li>
							  <li>Pooling water or muddy soil in your yard or basement</li>
							  <li>Bright green grass in the drain field, especially in the dry season</li>
							  <li>A strong odor near the septic system or drain field</li>
						  </ul>
					  </div>
					</div>
				</div>
			</div>
			<hr>
			<?php include("./partials/contact-form.php") ?>
			<hr>
			</div>
		</main>
		<?php include("./partials/footer.php") ?>
	</body>
</html>