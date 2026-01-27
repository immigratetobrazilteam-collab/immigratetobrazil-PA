
// Master JS for State: PA - Persona: River Amazon Explorer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const pa_index_section_immigrate_to_par = document.getElementById('pa-index-section-immigrate-to-par');
  if (pa_index_section_immigrate_to_par) {
    gsap.fromTo('#pa-index-section-immigrate-to-par', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_form_immigrate_to_par = document.getElementById('pa-index-form-immigrate-to-par');
  if (pa_index_form_immigrate_to_par) {
    gsap.from('#pa-index-form-immigrate-to-par input, #pa-index-form-immigrate-to-par textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_state_vibe = document.getElementById('pa-index-section-state-vibe');
  if (pa_index_section_state_vibe) {
    gsap.fromTo('#pa-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_quick_facts_snapshot = document.getElementById('pa-index-section-quick-facts-snapshot');
  if (pa_index_section_quick_facts_snapshot) {
    gsap.fromTo('#pa-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_par_map = document.getElementById('pa-index-section-par-map');
  if (pa_index_section_par_map) {
    gsap.fromTo('#pa-index-section-par-map', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_cost_of_living_par = document.getElementById('pa-index-section-cost-of-living-par');
  if (pa_index_section_cost_of_living_par) {
    gsap.fromTo('#pa-index-section-cost-of-living-par', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_government_context = document.getElementById('pa-index-section-government-context');
  if (pa_index_section_government_context) {
    gsap.fromTo('#pa-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_hero_immigration_notes = document.getElementById('pa-index-hero-immigration-notes');
  if (pa_index_hero_immigration_notes) {
    gsap.fromTo('#pa-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_common_applicant_profiles = document.getElementById('pa-index-list-common-applicant-profiles');
  if (pa_index_list_common_applicant_profiles) {
    gsap.from('#pa-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_economic_drivers = document.getElementById('pa-index-list-economic-drivers');
  if (pa_index_list_economic_drivers) {
    gsap.from('#pa-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_demographics = document.getElementById('pa-index-section-demographics');
  if (pa_index_section_demographics) {
    gsap.fromTo('#pa-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_regional_challenges = document.getElementById('pa-index-section-regional-challenges');
  if (pa_index_section_regional_challenges) {
    gsap.fromTo('#pa-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_regional_opportunities = document.getElementById('pa-index-section-regional-opportunities');
  if (pa_index_section_regional_opportunities) {
    gsap.fromTo('#pa-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_culture_daily_life = document.getElementById('pa-index-section-culture-daily-life');
  if (pa_index_section_culture_daily_life) {
    gsap.fromTo('#pa-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_local_language_expressions = document.getElementById('pa-index-list-local-language-expressions');
  if (pa_index_list_local_language_expressions) {
    gsap.from('#pa-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_food_cuisine = document.getElementById('pa-index-list-food-cuisine');
  if (pa_index_list_food_cuisine) {
    gsap.from('#pa-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_festivals_traditions = document.getElementById('pa-index-list-festivals-traditions');
  if (pa_index_list_festivals_traditions) {
    gsap.from('#pa-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_music_artistic_expression = document.getElementById('pa-index-list-music-artistic-expression');
  if (pa_index_list_music_artistic_expression) {
    gsap.from('#pa-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_sports_recreation = document.getElementById('pa-index-list-sports-recreation');
  if (pa_index_list_sports_recreation) {
    gsap.from('#pa-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_landmarks_historical_sites = document.getElementById('pa-index-list-landmarks-historical-sites');
  if (pa_index_list_landmarks_historical_sites) {
    gsap.from('#pa-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_natural_features = document.getElementById('pa-index-list-natural-features');
  if (pa_index_list_natural_features) {
    gsap.from('#pa-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_parks_protected_areas = document.getElementById('pa-index-list-parks-protected-areas');
  if (pa_index_list_parks_protected_areas) {
    gsap.from('#pa-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_museums_cultural_institutions = document.getElementById('pa-index-list-museums-cultural-institutions');
  if (pa_index_list_museums_cultural_institutions) {
    gsap.from('#pa-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_image_gallery = document.getElementById('pa-index-section-image-gallery');
  if (pa_index_section_image_gallery) {
    gsap.fromTo('#pa-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_useful_government_links = document.getElementById('pa-index-section-useful-government-links');
  if (pa_index_section_useful_government_links) {
    gsap.fromTo('#pa-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_hero_federal_police_immigration_links = document.getElementById('pa-index-hero-federal-police-immigration-links');
  if (pa_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#pa-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_external_references = document.getElementById('pa-index-section-external-references');
  if (pa_index_section_external_references) {
    gsap.fromTo('#pa-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_immigration_services_overview = document.getElementById('pa-index-list-immigration-services-overview');
  if (pa_index_list_immigration_services_overview) {
    gsap.from('#pa-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_why_immigrate_here = document.getElementById('pa-index-section-why-immigrate-here');
  if (pa_index_section_why_immigrate_here) {
    gsap.fromTo('#pa-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section_legal_guidance_disclaimers = document.getElementById('pa-index-section-legal-guidance-disclaimers');
  if (pa_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#pa-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_travel_services = document.getElementById('pa-index-list-travel-services');
  if (pa_index_list_travel_services) {
    gsap.from('#pa-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_list_how_the_process_works = document.getElementById('pa-index-list-how-the-process-works');
  if (pa_index_list_how_the_process_works) {
    gsap.from('#pa-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_index_section__frequently_asked_questions_about_living_in_par_ = document.getElementById('pa-index-section--frequently-asked-questions-about-living-in-par-');
  if (pa_index_section__frequently_asked_questions_about_living_in_par_) {
    gsap.fromTo('#pa-index-section--frequently-asked-questions-about-living-in-par-', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_contactcta_section_get_started_in_par = document.getElementById('pa-contactcta-section-get-started-in-par');
  if (pa_contactcta_section_get_started_in_par) {
    gsap.fromTo('#pa-contactcta-section-get-started-in-par', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('pa-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (pa_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#pa-renouncingcitizenship-form-renounce-brazilian-citizenship input, #pa-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_quick_facts = document.getElementById('pa-renouncingcitizenship-list-quick-facts');
  if (pa_renouncingcitizenship_list_quick_facts) {
    gsap.from('#pa-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('pa-renouncingcitizenship-list-common-challenges-applicants-face');
  if (pa_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pa-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('pa-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (pa_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pa-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_renunciation_overview = document.getElementById('pa-renouncingcitizenship-section-renunciation-overview');
  if (pa_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#pa-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_form_who_is_this_for = document.getElementById('pa-renouncingcitizenship-form-who-is-this-for');
  if (pa_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#pa-renouncingcitizenship-form-who-is-this-for input, #pa-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_required_documents = document.getElementById('pa-renouncingcitizenship-list-required-documents');
  if (pa_renouncingcitizenship_list_required_documents) {
    gsap.from('#pa-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_process = document.getElementById('pa-renouncingcitizenship-list-process');
  if (pa_renouncingcitizenship_list_process) {
    gsap.from('#pa-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_timelines_deadlines = document.getElementById('pa-renouncingcitizenship-section-timelines-deadlines');
  if (pa_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pa-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_fees_costs = document.getElementById('pa-renouncingcitizenship-section-fees-costs');
  if (pa_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#pa-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('pa-renouncingcitizenship-list-risks-common-mistakes');
  if (pa_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#pa-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('pa-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (pa_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_par_specific_context = document.getElementById('pa-renouncingcitizenship-section-par-specific-context');
  if (pa_renouncingcitizenship_section_par_specific_context) {
    gsap.fromTo('#pa-renouncingcitizenship-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_what_our_clients_say = document.getElementById('pa-renouncingcitizenship-section-what-our-clients-say');
  if (pa_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pa-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('pa-renouncingcitizenship-section-frequently-asked-questions');
  if (pa_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pa-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_international_support = document.getElementById('pa-renouncingcitizenship-section-international-support');
  if (pa_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#pa-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_our_credentials = document.getElementById('pa-renouncingcitizenship-list-our-credentials');
  if (pa_renouncingcitizenship_list_our_credentials) {
    gsap.from('#pa-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_list_related_services = document.getElementById('pa-renouncingcitizenship-list-related-services');
  if (pa_renouncingcitizenship_list_related_services) {
    gsap.from('#pa-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('pa-renouncingcitizenship-section-youre-in-good-hands');
  if (pa_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pa-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_renouncingcitizenship_section_21 = document.getElementById('pa-renouncingcitizenship-section-21');
  if (pa_renouncingcitizenship_section_21) {
    gsap.fromTo('#pa-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('pa-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (pa_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#pa-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #pa-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_quick_facts = document.getElementById('pa-provisional-list-quick-facts');
  if (pa_provisional_list_quick_facts) {
    gsap.from('#pa-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_common_challenges_applicants_face = document.getElementById('pa-provisional-list-common-challenges-applicants-face');
  if (pa_provisional_list_common_challenges_applicants_face) {
    gsap.from('#pa-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_how_we_solve_these_challenges = document.getElementById('pa-provisional-list-how-we-solve-these-challenges');
  if (pa_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#pa-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_naturalisation_overview = document.getElementById('pa-provisional-section-naturalisation-overview');
  if (pa_provisional_section_naturalisation_overview) {
    gsap.fromTo('#pa-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_form_who_is_this_naturalisation_for = document.getElementById('pa-provisional-form-who-is-this-naturalisation-for');
  if (pa_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#pa-provisional-form-who-is-this-naturalisation-for input, #pa-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_required_documents = document.getElementById('pa-provisional-list-required-documents');
  if (pa_provisional_list_required_documents) {
    gsap.from('#pa-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_application_process = document.getElementById('pa-provisional-list-application-process');
  if (pa_provisional_list_application_process) {
    gsap.from('#pa-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_timelines_deadlines = document.getElementById('pa-provisional-section-timelines-deadlines');
  if (pa_provisional_section_timelines_deadlines) {
    gsap.fromTo('#pa-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_fees_costs = document.getElementById('pa-provisional-section-fees-costs');
  if (pa_provisional_section_fees_costs) {
    gsap.fromTo('#pa-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_risks_common_mistakes = document.getElementById('pa-provisional-list-risks-common-mistakes');
  if (pa_provisional_list_risks_common_mistakes) {
    gsap.from('#pa-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_diy_vs_professional_assistance = document.getElementById('pa-provisional-section-diy-vs-professional-assistance');
  if (pa_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_par_specific_context = document.getElementById('pa-provisional-section-par-specific-context');
  if (pa_provisional_section_par_specific_context) {
    gsap.fromTo('#pa-provisional-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_what_our_clients_say = document.getElementById('pa-provisional-section-what-our-clients-say');
  if (pa_provisional_section_what_our_clients_say) {
    gsap.fromTo('#pa-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_frequently_asked_questions = document.getElementById('pa-provisional-section-frequently-asked-questions');
  if (pa_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#pa-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_international_support = document.getElementById('pa-provisional-section-international-support');
  if (pa_provisional_section_international_support) {
    gsap.fromTo('#pa-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_our_credentials = document.getElementById('pa-provisional-list-our-credentials');
  if (pa_provisional_list_our_credentials) {
    gsap.from('#pa-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_list_related_services = document.getElementById('pa-provisional-list-related-services');
  if (pa_provisional_list_related_services) {
    gsap.from('#pa-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_youre_in_good_hands = document.getElementById('pa-provisional-section-youre-in-good-hands');
  if (pa_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#pa-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_provisional_section_21 = document.getElementById('pa-provisional-section-21');
  if (pa_provisional_section_21) {
    gsap.fromTo('#pa-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('pa-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (pa_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#pa-special-form-special-naturalisation-in-brazil-for-particular-cases input, #pa-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_quick_facts = document.getElementById('pa-special-list-quick-facts');
  if (pa_special_list_quick_facts) {
    gsap.from('#pa-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_common_challenges_applicants_face = document.getElementById('pa-special-list-common-challenges-applicants-face');
  if (pa_special_list_common_challenges_applicants_face) {
    gsap.from('#pa-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_how_we_solve_these_challenges = document.getElementById('pa-special-list-how-we-solve-these-challenges');
  if (pa_special_list_how_we_solve_these_challenges) {
    gsap.from('#pa-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_naturalisation_overview = document.getElementById('pa-special-section-naturalisation-overview');
  if (pa_special_section_naturalisation_overview) {
    gsap.fromTo('#pa-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_form_who_is_this_naturalisation_for = document.getElementById('pa-special-form-who-is-this-naturalisation-for');
  if (pa_special_form_who_is_this_naturalisation_for) {
    gsap.from('#pa-special-form-who-is-this-naturalisation-for input, #pa-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_required_documents = document.getElementById('pa-special-list-required-documents');
  if (pa_special_list_required_documents) {
    gsap.from('#pa-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_application_process = document.getElementById('pa-special-list-application-process');
  if (pa_special_list_application_process) {
    gsap.from('#pa-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_timelines_deadlines = document.getElementById('pa-special-section-timelines-deadlines');
  if (pa_special_section_timelines_deadlines) {
    gsap.fromTo('#pa-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_fees_costs = document.getElementById('pa-special-section-fees-costs');
  if (pa_special_section_fees_costs) {
    gsap.fromTo('#pa-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_risks_common_mistakes = document.getElementById('pa-special-list-risks-common-mistakes');
  if (pa_special_list_risks_common_mistakes) {
    gsap.from('#pa-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_diy_vs_professional_assistance = document.getElementById('pa-special-section-diy-vs-professional-assistance');
  if (pa_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_par_specific_context = document.getElementById('pa-special-section-par-specific-context');
  if (pa_special_section_par_specific_context) {
    gsap.fromTo('#pa-special-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_what_our_clients_say = document.getElementById('pa-special-section-what-our-clients-say');
  if (pa_special_section_what_our_clients_say) {
    gsap.fromTo('#pa-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_frequently_asked_questions = document.getElementById('pa-special-section-frequently-asked-questions');
  if (pa_special_section_frequently_asked_questions) {
    gsap.fromTo('#pa-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_international_support = document.getElementById('pa-special-section-international-support');
  if (pa_special_section_international_support) {
    gsap.fromTo('#pa-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_our_credentials = document.getElementById('pa-special-list-our-credentials');
  if (pa_special_list_our_credentials) {
    gsap.from('#pa-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_list_related_services = document.getElementById('pa-special-list-related-services');
  if (pa_special_list_related_services) {
    gsap.from('#pa-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_youre_in_good_hands = document.getElementById('pa-special-section-youre-in-good-hands');
  if (pa_special_section_youre_in_good_hands) {
    gsap.fromTo('#pa-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_special_section_21 = document.getElementById('pa-special-section-21');
  if (pa_special_section_21) {
    gsap.fromTo('#pa-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('pa-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (pa_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#pa-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #pa-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_quick_facts = document.getElementById('pa-ordinary-list-quick-facts');
  if (pa_ordinary_list_quick_facts) {
    gsap.from('#pa-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_common_challenges_applicants_face = document.getElementById('pa-ordinary-list-common-challenges-applicants-face');
  if (pa_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#pa-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_how_we_solve_these_challenges = document.getElementById('pa-ordinary-list-how-we-solve-these-challenges');
  if (pa_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pa-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_naturalisation_overview = document.getElementById('pa-ordinary-section-naturalisation-overview');
  if (pa_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#pa-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_form_who_is_this_naturalisation_for = document.getElementById('pa-ordinary-form-who-is-this-naturalisation-for');
  if (pa_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pa-ordinary-form-who-is-this-naturalisation-for input, #pa-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_required_documents = document.getElementById('pa-ordinary-list-required-documents');
  if (pa_ordinary_list_required_documents) {
    gsap.from('#pa-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_application_process = document.getElementById('pa-ordinary-list-application-process');
  if (pa_ordinary_list_application_process) {
    gsap.from('#pa-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_timelines_deadlines = document.getElementById('pa-ordinary-section-timelines-deadlines');
  if (pa_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#pa-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_fees_costs = document.getElementById('pa-ordinary-section-fees-costs');
  if (pa_ordinary_section_fees_costs) {
    gsap.fromTo('#pa-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_risks_common_mistakes = document.getElementById('pa-ordinary-list-risks-common-mistakes');
  if (pa_ordinary_list_risks_common_mistakes) {
    gsap.from('#pa-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_diy_vs_professional_assistance = document.getElementById('pa-ordinary-section-diy-vs-professional-assistance');
  if (pa_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_par_specific_context = document.getElementById('pa-ordinary-section-par-specific-context');
  if (pa_ordinary_section_par_specific_context) {
    gsap.fromTo('#pa-ordinary-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_what_our_clients_say = document.getElementById('pa-ordinary-section-what-our-clients-say');
  if (pa_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#pa-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_frequently_asked_questions = document.getElementById('pa-ordinary-section-frequently-asked-questions');
  if (pa_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pa-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_international_support = document.getElementById('pa-ordinary-section-international-support');
  if (pa_ordinary_section_international_support) {
    gsap.fromTo('#pa-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_our_credentials = document.getElementById('pa-ordinary-list-our-credentials');
  if (pa_ordinary_list_our_credentials) {
    gsap.from('#pa-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_list_related_services = document.getElementById('pa-ordinary-list-related-services');
  if (pa_ordinary_list_related_services) {
    gsap.from('#pa-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_youre_in_good_hands = document.getElementById('pa-ordinary-section-youre-in-good-hands');
  if (pa_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pa-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_ordinary_section_21 = document.getElementById('pa-ordinary-section-21');
  if (pa_ordinary_section_21) {
    gsap.fromTo('#pa-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('pa-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (pa_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#pa-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #pa-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_quick_facts = document.getElementById('pa-extraordinary-list-quick-facts');
  if (pa_extraordinary_list_quick_facts) {
    gsap.from('#pa-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_common_challenges_applicants_face = document.getElementById('pa-extraordinary-list-common-challenges-applicants-face');
  if (pa_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#pa-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_how_we_solve_these_challenges = document.getElementById('pa-extraordinary-list-how-we-solve-these-challenges');
  if (pa_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pa-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_naturalisation_overview = document.getElementById('pa-extraordinary-section-naturalisation-overview');
  if (pa_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#pa-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('pa-extraordinary-form-who-is-this-naturalisation-for');
  if (pa_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pa-extraordinary-form-who-is-this-naturalisation-for input, #pa-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_required_documents = document.getElementById('pa-extraordinary-list-required-documents');
  if (pa_extraordinary_list_required_documents) {
    gsap.from('#pa-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_application_process = document.getElementById('pa-extraordinary-list-application-process');
  if (pa_extraordinary_list_application_process) {
    gsap.from('#pa-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_timelines_deadlines = document.getElementById('pa-extraordinary-section-timelines-deadlines');
  if (pa_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#pa-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_fees_costs = document.getElementById('pa-extraordinary-section-fees-costs');
  if (pa_extraordinary_section_fees_costs) {
    gsap.fromTo('#pa-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_risks_common_mistakes = document.getElementById('pa-extraordinary-list-risks-common-mistakes');
  if (pa_extraordinary_list_risks_common_mistakes) {
    gsap.from('#pa-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_diy_vs_professional_assistance = document.getElementById('pa-extraordinary-section-diy-vs-professional-assistance');
  if (pa_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_par_specific_context = document.getElementById('pa-extraordinary-section-par-specific-context');
  if (pa_extraordinary_section_par_specific_context) {
    gsap.fromTo('#pa-extraordinary-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_what_our_clients_say = document.getElementById('pa-extraordinary-section-what-our-clients-say');
  if (pa_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#pa-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_frequently_asked_questions = document.getElementById('pa-extraordinary-section-frequently-asked-questions');
  if (pa_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pa-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_international_support = document.getElementById('pa-extraordinary-section-international-support');
  if (pa_extraordinary_section_international_support) {
    gsap.fromTo('#pa-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_our_credentials = document.getElementById('pa-extraordinary-list-our-credentials');
  if (pa_extraordinary_list_our_credentials) {
    gsap.from('#pa-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_list_related_services = document.getElementById('pa-extraordinary-list-related-services');
  if (pa_extraordinary_list_related_services) {
    gsap.from('#pa-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_youre_in_good_hands = document.getElementById('pa-extraordinary-section-youre-in-good-hands');
  if (pa_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pa-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extraordinary_section_21 = document.getElementById('pa-extraordinary-section-21');
  if (pa_extraordinary_section_21) {
    gsap.fromTo('#pa-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('pa-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (pa_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#pa-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #pa-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_quick_facts = document.getElementById('pa-reacquisitioncitizenship-list-quick-facts');
  if (pa_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#pa-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('pa-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (pa_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pa-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('pa-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (pa_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pa-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('pa-reacquisitioncitizenship-section-reacquisition-overview');
  if (pa_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('pa-reacquisitioncitizenship-form-who-is-this-for');
  if (pa_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#pa-reacquisitioncitizenship-form-who-is-this-for input, #pa-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_required_documents = document.getElementById('pa-reacquisitioncitizenship-list-required-documents');
  if (pa_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#pa-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_process = document.getElementById('pa-reacquisitioncitizenship-list-process');
  if (pa_reacquisitioncitizenship_list_process) {
    gsap.from('#pa-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('pa-reacquisitioncitizenship-section-timelines-deadlines');
  if (pa_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_fees_costs = document.getElementById('pa-reacquisitioncitizenship-section-fees-costs');
  if (pa_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('pa-reacquisitioncitizenship-list-risks-common-mistakes');
  if (pa_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#pa-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('pa-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (pa_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_par_specific_context = document.getElementById('pa-reacquisitioncitizenship-section-par-specific-context');
  if (pa_reacquisitioncitizenship_section_par_specific_context) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('pa-reacquisitioncitizenship-section-what-our-clients-say');
  if (pa_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('pa-reacquisitioncitizenship-section-frequently-asked-questions');
  if (pa_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_international_support = document.getElementById('pa-reacquisitioncitizenship-section-international-support');
  if (pa_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_our_credentials = document.getElementById('pa-reacquisitioncitizenship-list-our-credentials');
  if (pa_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#pa-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_list_related_services = document.getElementById('pa-reacquisitioncitizenship-list-related-services');
  if (pa_reacquisitioncitizenship_list_related_services) {
    gsap.from('#pa-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('pa-reacquisitioncitizenship-section-youre-in-good-hands');
  if (pa_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_reacquisitioncitizenship_section_21 = document.getElementById('pa-reacquisitioncitizenship-section-21');
  if (pa_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#pa-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('pa-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (pa_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#pa-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #pa-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_quick_facts = document.getElementById('pa-scientificresearch-list-quick-facts');
  if (pa_scientificresearch_list_quick_facts) {
    gsap.from('#pa-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_common_challenges_applicants_face = document.getElementById('pa-scientificresearch-list-common-challenges-applicants-face');
  if (pa_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#pa-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('pa-scientificresearch-list-how-we-solve-these-challenges');
  if (pa_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#pa-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_residency_overview = document.getElementById('pa-scientificresearch-section-residency-overview');
  if (pa_scientificresearch_section_residency_overview) {
    gsap.fromTo('#pa-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_form_who_is_this_residency_for = document.getElementById('pa-scientificresearch-form-who-is-this-residency-for');
  if (pa_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#pa-scientificresearch-form-who-is-this-residency-for input, #pa-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_required_documents = document.getElementById('pa-scientificresearch-list-required-documents');
  if (pa_scientificresearch_list_required_documents) {
    gsap.from('#pa-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_application_process = document.getElementById('pa-scientificresearch-list-application-process');
  if (pa_scientificresearch_list_application_process) {
    gsap.from('#pa-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_timelines_deadlines = document.getElementById('pa-scientificresearch-section-timelines-deadlines');
  if (pa_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#pa-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_fees_costs = document.getElementById('pa-scientificresearch-section-fees-costs');
  if (pa_scientificresearch_section_fees_costs) {
    gsap.fromTo('#pa-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_risks_common_mistakes = document.getElementById('pa-scientificresearch-list-risks-common-mistakes');
  if (pa_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#pa-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('pa-scientificresearch-section-diy-vs-professional-assistance');
  if (pa_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_par_specific_context = document.getElementById('pa-scientificresearch-section-par-specific-context');
  if (pa_scientificresearch_section_par_specific_context) {
    gsap.fromTo('#pa-scientificresearch-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_what_our_clients_say = document.getElementById('pa-scientificresearch-section-what-our-clients-say');
  if (pa_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#pa-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_frequently_asked_questions = document.getElementById('pa-scientificresearch-section-frequently-asked-questions');
  if (pa_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#pa-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_international_support = document.getElementById('pa-scientificresearch-section-international-support');
  if (pa_scientificresearch_section_international_support) {
    gsap.fromTo('#pa-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_our_credentials = document.getElementById('pa-scientificresearch-list-our-credentials');
  if (pa_scientificresearch_list_our_credentials) {
    gsap.from('#pa-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_list_related_services = document.getElementById('pa-scientificresearch-list-related-services');
  if (pa_scientificresearch_list_related_services) {
    gsap.from('#pa-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_youre_in_good_hands = document.getElementById('pa-scientificresearch-section-youre-in-good-hands');
  if (pa_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#pa-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_scientificresearch_section_21 = document.getElementById('pa-scientificresearch-section-21');
  if (pa_scientificresearch_section_21) {
    gsap.fromTo('#pa-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_form_study_in_brazil_with_study_residency = document.getElementById('pa-study-form-study-in-brazil-with-study-residency');
  if (pa_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#pa-study-form-study-in-brazil-with-study-residency input, #pa-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_quick_facts = document.getElementById('pa-study-list-quick-facts');
  if (pa_study_list_quick_facts) {
    gsap.from('#pa-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_common_challenges_applicants_face = document.getElementById('pa-study-list-common-challenges-applicants-face');
  if (pa_study_list_common_challenges_applicants_face) {
    gsap.from('#pa-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_how_we_solve_these_challenges = document.getElementById('pa-study-list-how-we-solve-these-challenges');
  if (pa_study_list_how_we_solve_these_challenges) {
    gsap.from('#pa-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_residency_overview = document.getElementById('pa-study-section-residency-overview');
  if (pa_study_section_residency_overview) {
    gsap.fromTo('#pa-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_form_who_is_this_residency_for = document.getElementById('pa-study-form-who-is-this-residency-for');
  if (pa_study_form_who_is_this_residency_for) {
    gsap.from('#pa-study-form-who-is-this-residency-for input, #pa-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_required_documents = document.getElementById('pa-study-list-required-documents');
  if (pa_study_list_required_documents) {
    gsap.from('#pa-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_application_process = document.getElementById('pa-study-list-application-process');
  if (pa_study_list_application_process) {
    gsap.from('#pa-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_timelines_deadlines = document.getElementById('pa-study-section-timelines-deadlines');
  if (pa_study_section_timelines_deadlines) {
    gsap.fromTo('#pa-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_fees_costs = document.getElementById('pa-study-section-fees-costs');
  if (pa_study_section_fees_costs) {
    gsap.fromTo('#pa-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_risks_common_mistakes = document.getElementById('pa-study-list-risks-common-mistakes');
  if (pa_study_list_risks_common_mistakes) {
    gsap.from('#pa-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_diy_vs_professional_assistance = document.getElementById('pa-study-section-diy-vs-professional-assistance');
  if (pa_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_par_specific_context = document.getElementById('pa-study-section-par-specific-context');
  if (pa_study_section_par_specific_context) {
    gsap.fromTo('#pa-study-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_what_our_clients_say = document.getElementById('pa-study-section-what-our-clients-say');
  if (pa_study_section_what_our_clients_say) {
    gsap.fromTo('#pa-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_frequently_asked_questions = document.getElementById('pa-study-section-frequently-asked-questions');
  if (pa_study_section_frequently_asked_questions) {
    gsap.fromTo('#pa-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_international_support = document.getElementById('pa-study-section-international-support');
  if (pa_study_section_international_support) {
    gsap.fromTo('#pa-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_our_credentials = document.getElementById('pa-study-list-our-credentials');
  if (pa_study_list_our_credentials) {
    gsap.from('#pa-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_list_related_services = document.getElementById('pa-study-list-related-services');
  if (pa_study_list_related_services) {
    gsap.from('#pa-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_youre_in_good_hands = document.getElementById('pa-study-section-youre-in-good-hands');
  if (pa_study_section_youre_in_good_hands) {
    gsap.fromTo('#pa-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_study_section_21 = document.getElementById('pa-study-section-21');
  if (pa_study_section_21) {
    gsap.fromTo('#pa-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('pa-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (pa_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#pa-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #pa-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_quick_facts = document.getElementById('pa-educationalexchange-list-quick-facts');
  if (pa_educationalexchange_list_quick_facts) {
    gsap.from('#pa-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_common_challenges_applicants_face = document.getElementById('pa-educationalexchange-list-common-challenges-applicants-face');
  if (pa_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#pa-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('pa-educationalexchange-list-how-we-solve-these-challenges');
  if (pa_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pa-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_residency_overview = document.getElementById('pa-educationalexchange-section-residency-overview');
  if (pa_educationalexchange_section_residency_overview) {
    gsap.fromTo('#pa-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_form_who_is_this_residency_for = document.getElementById('pa-educationalexchange-form-who-is-this-residency-for');
  if (pa_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#pa-educationalexchange-form-who-is-this-residency-for input, #pa-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_required_documents = document.getElementById('pa-educationalexchange-list-required-documents');
  if (pa_educationalexchange_list_required_documents) {
    gsap.from('#pa-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_application_process = document.getElementById('pa-educationalexchange-list-application-process');
  if (pa_educationalexchange_list_application_process) {
    gsap.from('#pa-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_timelines_deadlines = document.getElementById('pa-educationalexchange-section-timelines-deadlines');
  if (pa_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#pa-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_fees_costs = document.getElementById('pa-educationalexchange-section-fees-costs');
  if (pa_educationalexchange_section_fees_costs) {
    gsap.fromTo('#pa-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_risks_common_mistakes = document.getElementById('pa-educationalexchange-list-risks-common-mistakes');
  if (pa_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#pa-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('pa-educationalexchange-section-diy-vs-professional-assistance');
  if (pa_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_par_specific_context = document.getElementById('pa-educationalexchange-section-par-specific-context');
  if (pa_educationalexchange_section_par_specific_context) {
    gsap.fromTo('#pa-educationalexchange-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_what_our_clients_say = document.getElementById('pa-educationalexchange-section-what-our-clients-say');
  if (pa_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#pa-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_frequently_asked_questions = document.getElementById('pa-educationalexchange-section-frequently-asked-questions');
  if (pa_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pa-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_international_support = document.getElementById('pa-educationalexchange-section-international-support');
  if (pa_educationalexchange_section_international_support) {
    gsap.fromTo('#pa-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_our_credentials = document.getElementById('pa-educationalexchange-list-our-credentials');
  if (pa_educationalexchange_list_our_credentials) {
    gsap.from('#pa-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_list_related_services = document.getElementById('pa-educationalexchange-list-related-services');
  if (pa_educationalexchange_list_related_services) {
    gsap.from('#pa-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_youre_in_good_hands = document.getElementById('pa-educationalexchange-section-youre-in-good-hands');
  if (pa_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pa-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_educationalexchange_section_21 = document.getElementById('pa-educationalexchange-section-21');
  if (pa_educationalexchange_section_21) {
    gsap.fromTo('#pa-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('pa-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (pa_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#pa-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #pa-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_quick_facts = document.getElementById('pa-humanitarian-list-quick-facts');
  if (pa_humanitarian_list_quick_facts) {
    gsap.from('#pa-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_common_challenges_applicants_face = document.getElementById('pa-humanitarian-list-common-challenges-applicants-face');
  if (pa_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#pa-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_how_we_solve_these_challenges = document.getElementById('pa-humanitarian-list-how-we-solve-these-challenges');
  if (pa_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#pa-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_residency_overview = document.getElementById('pa-humanitarian-section-residency-overview');
  if (pa_humanitarian_section_residency_overview) {
    gsap.fromTo('#pa-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_form_who_is_this_residency_for = document.getElementById('pa-humanitarian-form-who-is-this-residency-for');
  if (pa_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#pa-humanitarian-form-who-is-this-residency-for input, #pa-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_required_documents = document.getElementById('pa-humanitarian-list-required-documents');
  if (pa_humanitarian_list_required_documents) {
    gsap.from('#pa-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_application_process = document.getElementById('pa-humanitarian-list-application-process');
  if (pa_humanitarian_list_application_process) {
    gsap.from('#pa-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_timelines_deadlines = document.getElementById('pa-humanitarian-section-timelines-deadlines');
  if (pa_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#pa-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_fees_costs = document.getElementById('pa-humanitarian-section-fees-costs');
  if (pa_humanitarian_section_fees_costs) {
    gsap.fromTo('#pa-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_risks_common_mistakes = document.getElementById('pa-humanitarian-list-risks-common-mistakes');
  if (pa_humanitarian_list_risks_common_mistakes) {
    gsap.from('#pa-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_diy_vs_professional_assistance = document.getElementById('pa-humanitarian-section-diy-vs-professional-assistance');
  if (pa_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_par_specific_context = document.getElementById('pa-humanitarian-section-par-specific-context');
  if (pa_humanitarian_section_par_specific_context) {
    gsap.fromTo('#pa-humanitarian-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_what_our_clients_say = document.getElementById('pa-humanitarian-section-what-our-clients-say');
  if (pa_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#pa-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_frequently_asked_questions = document.getElementById('pa-humanitarian-section-frequently-asked-questions');
  if (pa_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#pa-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_international_support = document.getElementById('pa-humanitarian-section-international-support');
  if (pa_humanitarian_section_international_support) {
    gsap.fromTo('#pa-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_our_credentials = document.getElementById('pa-humanitarian-list-our-credentials');
  if (pa_humanitarian_list_our_credentials) {
    gsap.from('#pa-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_list_related_services = document.getElementById('pa-humanitarian-list-related-services');
  if (pa_humanitarian_list_related_services) {
    gsap.from('#pa-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_youre_in_good_hands = document.getElementById('pa-humanitarian-section-youre-in-good-hands');
  if (pa_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#pa-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_humanitarian_section_21 = document.getElementById('pa-humanitarian-section-21');
  if (pa_humanitarian_section_21) {
    gsap.fromTo('#pa-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('pa-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (pa_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#pa-digitalnomad-form-digital-nomad-residency-in-brazil input, #pa-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_quick_facts = document.getElementById('pa-digitalnomad-list-quick-facts');
  if (pa_digitalnomad_list_quick_facts) {
    gsap.from('#pa-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_common_challenges_applicants_face = document.getElementById('pa-digitalnomad-list-common-challenges-applicants-face');
  if (pa_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#pa-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('pa-digitalnomad-list-how-we-solve-these-challenges');
  if (pa_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#pa-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_residency_overview = document.getElementById('pa-digitalnomad-section-residency-overview');
  if (pa_digitalnomad_section_residency_overview) {
    gsap.fromTo('#pa-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_form_who_is_this_residency_for = document.getElementById('pa-digitalnomad-form-who-is-this-residency-for');
  if (pa_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#pa-digitalnomad-form-who-is-this-residency-for input, #pa-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_required_documents = document.getElementById('pa-digitalnomad-list-required-documents');
  if (pa_digitalnomad_list_required_documents) {
    gsap.from('#pa-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_application_process = document.getElementById('pa-digitalnomad-list-application-process');
  if (pa_digitalnomad_list_application_process) {
    gsap.from('#pa-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_timelines_deadlines = document.getElementById('pa-digitalnomad-section-timelines-deadlines');
  if (pa_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#pa-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_fees_costs = document.getElementById('pa-digitalnomad-section-fees-costs');
  if (pa_digitalnomad_section_fees_costs) {
    gsap.fromTo('#pa-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_risks_common_mistakes = document.getElementById('pa-digitalnomad-list-risks-common-mistakes');
  if (pa_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#pa-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('pa-digitalnomad-section-diy-vs-professional-assistance');
  if (pa_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_par_specific_context = document.getElementById('pa-digitalnomad-section-par-specific-context');
  if (pa_digitalnomad_section_par_specific_context) {
    gsap.fromTo('#pa-digitalnomad-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_what_our_clients_say = document.getElementById('pa-digitalnomad-section-what-our-clients-say');
  if (pa_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#pa-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_frequently_asked_questions = document.getElementById('pa-digitalnomad-section-frequently-asked-questions');
  if (pa_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#pa-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_international_support = document.getElementById('pa-digitalnomad-section-international-support');
  if (pa_digitalnomad_section_international_support) {
    gsap.fromTo('#pa-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_our_credentials = document.getElementById('pa-digitalnomad-list-our-credentials');
  if (pa_digitalnomad_list_our_credentials) {
    gsap.from('#pa-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_list_related_services = document.getElementById('pa-digitalnomad-list-related-services');
  if (pa_digitalnomad_list_related_services) {
    gsap.from('#pa-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_youre_in_good_hands = document.getElementById('pa-digitalnomad-section-youre-in-good-hands');
  if (pa_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#pa-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_digitalnomad_section_21 = document.getElementById('pa-digitalnomad-section-21');
  if (pa_digitalnomad_section_21) {
    gsap.fromTo('#pa-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('pa-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (pa_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#pa-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #pa-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_quick_facts = document.getElementById('pa-familyreunion-list-quick-facts');
  if (pa_familyreunion_list_quick_facts) {
    gsap.from('#pa-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_common_challenges_applicants_face = document.getElementById('pa-familyreunion-list-common-challenges-applicants-face');
  if (pa_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#pa-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_how_we_solve_these_challenges = document.getElementById('pa-familyreunion-list-how-we-solve-these-challenges');
  if (pa_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#pa-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_residency_overview = document.getElementById('pa-familyreunion-section-residency-overview');
  if (pa_familyreunion_section_residency_overview) {
    gsap.fromTo('#pa-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_form_who_is_this_residency_for = document.getElementById('pa-familyreunion-form-who-is-this-residency-for');
  if (pa_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#pa-familyreunion-form-who-is-this-residency-for input, #pa-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_required_documents = document.getElementById('pa-familyreunion-list-required-documents');
  if (pa_familyreunion_list_required_documents) {
    gsap.from('#pa-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_application_process = document.getElementById('pa-familyreunion-list-application-process');
  if (pa_familyreunion_list_application_process) {
    gsap.from('#pa-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_timelines_deadlines = document.getElementById('pa-familyreunion-section-timelines-deadlines');
  if (pa_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#pa-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_fees_costs = document.getElementById('pa-familyreunion-section-fees-costs');
  if (pa_familyreunion_section_fees_costs) {
    gsap.fromTo('#pa-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_risks_common_mistakes = document.getElementById('pa-familyreunion-list-risks-common-mistakes');
  if (pa_familyreunion_list_risks_common_mistakes) {
    gsap.from('#pa-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_diy_vs_professional_assistance = document.getElementById('pa-familyreunion-section-diy-vs-professional-assistance');
  if (pa_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_par_specific_context = document.getElementById('pa-familyreunion-section-par-specific-context');
  if (pa_familyreunion_section_par_specific_context) {
    gsap.fromTo('#pa-familyreunion-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_what_our_clients_say = document.getElementById('pa-familyreunion-section-what-our-clients-say');
  if (pa_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#pa-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_frequently_asked_questions = document.getElementById('pa-familyreunion-section-frequently-asked-questions');
  if (pa_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#pa-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_international_support = document.getElementById('pa-familyreunion-section-international-support');
  if (pa_familyreunion_section_international_support) {
    gsap.fromTo('#pa-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_our_credentials = document.getElementById('pa-familyreunion-list-our-credentials');
  if (pa_familyreunion_list_our_credentials) {
    gsap.from('#pa-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_list_related_services = document.getElementById('pa-familyreunion-list-related-services');
  if (pa_familyreunion_list_related_services) {
    gsap.from('#pa-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_youre_in_good_hands = document.getElementById('pa-familyreunion-section-youre-in-good-hands');
  if (pa_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#pa-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_familyreunion_section_21 = document.getElementById('pa-familyreunion-section-21');
  if (pa_familyreunion_section_21) {
    gsap.fromTo('#pa-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('pa-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (pa_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#pa-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #pa-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_quick_facts = document.getElementById('pa-mercosul-list-quick-facts');
  if (pa_mercosul_list_quick_facts) {
    gsap.from('#pa-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_common_challenges_applicants_face = document.getElementById('pa-mercosul-list-common-challenges-applicants-face');
  if (pa_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#pa-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_how_we_solve_these_challenges = document.getElementById('pa-mercosul-list-how-we-solve-these-challenges');
  if (pa_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#pa-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_residency_overview = document.getElementById('pa-mercosul-section-residency-overview');
  if (pa_mercosul_section_residency_overview) {
    gsap.fromTo('#pa-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_form_who_is_this_residency_for = document.getElementById('pa-mercosul-form-who-is-this-residency-for');
  if (pa_mercosul_form_who_is_this_residency_for) {
    gsap.from('#pa-mercosul-form-who-is-this-residency-for input, #pa-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_required_documents = document.getElementById('pa-mercosul-list-required-documents');
  if (pa_mercosul_list_required_documents) {
    gsap.from('#pa-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_application_process = document.getElementById('pa-mercosul-list-application-process');
  if (pa_mercosul_list_application_process) {
    gsap.from('#pa-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_timelines_deadlines = document.getElementById('pa-mercosul-section-timelines-deadlines');
  if (pa_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#pa-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_fees_costs = document.getElementById('pa-mercosul-section-fees-costs');
  if (pa_mercosul_section_fees_costs) {
    gsap.fromTo('#pa-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_risks_common_mistakes = document.getElementById('pa-mercosul-list-risks-common-mistakes');
  if (pa_mercosul_list_risks_common_mistakes) {
    gsap.from('#pa-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_diy_vs_professional_assistance = document.getElementById('pa-mercosul-section-diy-vs-professional-assistance');
  if (pa_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_par_specific_context = document.getElementById('pa-mercosul-section-par-specific-context');
  if (pa_mercosul_section_par_specific_context) {
    gsap.fromTo('#pa-mercosul-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_what_our_clients_say = document.getElementById('pa-mercosul-section-what-our-clients-say');
  if (pa_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#pa-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_frequently_asked_questions = document.getElementById('pa-mercosul-section-frequently-asked-questions');
  if (pa_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#pa-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_international_support = document.getElementById('pa-mercosul-section-international-support');
  if (pa_mercosul_section_international_support) {
    gsap.fromTo('#pa-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_our_credentials = document.getElementById('pa-mercosul-list-our-credentials');
  if (pa_mercosul_list_our_credentials) {
    gsap.from('#pa-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_list_related_services = document.getElementById('pa-mercosul-list-related-services');
  if (pa_mercosul_list_related_services) {
    gsap.from('#pa-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_youre_in_good_hands = document.getElementById('pa-mercosul-section-youre-in-good-hands');
  if (pa_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#pa-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_mercosul_section_21 = document.getElementById('pa-mercosul-section-21');
  if (pa_mercosul_section_21) {
    gsap.fromTo('#pa-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('pa-retiree-form-retire-in-brazil-with-retiree-residency');
  if (pa_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#pa-retiree-form-retire-in-brazil-with-retiree-residency input, #pa-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_quick_facts = document.getElementById('pa-retiree-list-quick-facts');
  if (pa_retiree_list_quick_facts) {
    gsap.from('#pa-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_common_challenges_applicants_face = document.getElementById('pa-retiree-list-common-challenges-applicants-face');
  if (pa_retiree_list_common_challenges_applicants_face) {
    gsap.from('#pa-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_how_we_solve_these_challenges = document.getElementById('pa-retiree-list-how-we-solve-these-challenges');
  if (pa_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#pa-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_residency_overview = document.getElementById('pa-retiree-section-residency-overview');
  if (pa_retiree_section_residency_overview) {
    gsap.fromTo('#pa-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_form_who_is_this_residency_for = document.getElementById('pa-retiree-form-who-is-this-residency-for');
  if (pa_retiree_form_who_is_this_residency_for) {
    gsap.from('#pa-retiree-form-who-is-this-residency-for input, #pa-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_required_documents = document.getElementById('pa-retiree-list-required-documents');
  if (pa_retiree_list_required_documents) {
    gsap.from('#pa-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_application_process = document.getElementById('pa-retiree-list-application-process');
  if (pa_retiree_list_application_process) {
    gsap.from('#pa-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_timelines_deadlines = document.getElementById('pa-retiree-section-timelines-deadlines');
  if (pa_retiree_section_timelines_deadlines) {
    gsap.fromTo('#pa-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_fees_costs = document.getElementById('pa-retiree-section-fees-costs');
  if (pa_retiree_section_fees_costs) {
    gsap.fromTo('#pa-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_risks_common_mistakes = document.getElementById('pa-retiree-list-risks-common-mistakes');
  if (pa_retiree_list_risks_common_mistakes) {
    gsap.from('#pa-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_diy_vs_professional_assistance = document.getElementById('pa-retiree-section-diy-vs-professional-assistance');
  if (pa_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_par_specific_context = document.getElementById('pa-retiree-section-par-specific-context');
  if (pa_retiree_section_par_specific_context) {
    gsap.fromTo('#pa-retiree-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_what_our_clients_say = document.getElementById('pa-retiree-section-what-our-clients-say');
  if (pa_retiree_section_what_our_clients_say) {
    gsap.fromTo('#pa-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_frequently_asked_questions = document.getElementById('pa-retiree-section-frequently-asked-questions');
  if (pa_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#pa-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_international_support = document.getElementById('pa-retiree-section-international-support');
  if (pa_retiree_section_international_support) {
    gsap.fromTo('#pa-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_our_credentials = document.getElementById('pa-retiree-list-our-credentials');
  if (pa_retiree_list_our_credentials) {
    gsap.from('#pa-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_list_related_services = document.getElementById('pa-retiree-list-related-services');
  if (pa_retiree_list_related_services) {
    gsap.from('#pa-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_youre_in_good_hands = document.getElementById('pa-retiree-section-youre-in-good-hands');
  if (pa_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#pa-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_retiree_section_21 = document.getElementById('pa-retiree-section-21');
  if (pa_retiree_section_21) {
    gsap.fromTo('#pa-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('pa-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (pa_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#pa-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #pa-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_quick_facts = document.getElementById('pa-volunteer-list-quick-facts');
  if (pa_volunteer_list_quick_facts) {
    gsap.from('#pa-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_common_challenges_applicants_face = document.getElementById('pa-volunteer-list-common-challenges-applicants-face');
  if (pa_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#pa-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_how_we_solve_these_challenges = document.getElementById('pa-volunteer-list-how-we-solve-these-challenges');
  if (pa_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#pa-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_residency_overview = document.getElementById('pa-volunteer-section-residency-overview');
  if (pa_volunteer_section_residency_overview) {
    gsap.fromTo('#pa-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_form_who_is_this_residency_for = document.getElementById('pa-volunteer-form-who-is-this-residency-for');
  if (pa_volunteer_form_who_is_this_residency_for) {
    gsap.from('#pa-volunteer-form-who-is-this-residency-for input, #pa-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_required_documents = document.getElementById('pa-volunteer-list-required-documents');
  if (pa_volunteer_list_required_documents) {
    gsap.from('#pa-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_application_process = document.getElementById('pa-volunteer-list-application-process');
  if (pa_volunteer_list_application_process) {
    gsap.from('#pa-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_timelines_deadlines = document.getElementById('pa-volunteer-section-timelines-deadlines');
  if (pa_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#pa-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_fees_costs = document.getElementById('pa-volunteer-section-fees-costs');
  if (pa_volunteer_section_fees_costs) {
    gsap.fromTo('#pa-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_risks_common_mistakes = document.getElementById('pa-volunteer-list-risks-common-mistakes');
  if (pa_volunteer_list_risks_common_mistakes) {
    gsap.from('#pa-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_diy_vs_professional_assistance = document.getElementById('pa-volunteer-section-diy-vs-professional-assistance');
  if (pa_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_par_specific_context = document.getElementById('pa-volunteer-section-par-specific-context');
  if (pa_volunteer_section_par_specific_context) {
    gsap.fromTo('#pa-volunteer-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_what_our_clients_say = document.getElementById('pa-volunteer-section-what-our-clients-say');
  if (pa_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#pa-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_frequently_asked_questions = document.getElementById('pa-volunteer-section-frequently-asked-questions');
  if (pa_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#pa-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_international_support = document.getElementById('pa-volunteer-section-international-support');
  if (pa_volunteer_section_international_support) {
    gsap.fromTo('#pa-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_our_credentials = document.getElementById('pa-volunteer-list-our-credentials');
  if (pa_volunteer_list_our_credentials) {
    gsap.from('#pa-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_list_related_services = document.getElementById('pa-volunteer-list-related-services');
  if (pa_volunteer_list_related_services) {
    gsap.from('#pa-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_youre_in_good_hands = document.getElementById('pa-volunteer-section-youre-in-good-hands');
  if (pa_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#pa-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_volunteer_section_21 = document.getElementById('pa-volunteer-section-21');
  if (pa_volunteer_section_21) {
    gsap.fromTo('#pa-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('pa-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (pa_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#pa-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #pa-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_quick_facts = document.getElementById('pa-skilledworker-list-quick-facts');
  if (pa_skilledworker_list_quick_facts) {
    gsap.from('#pa-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_common_challenges_applicants_face = document.getElementById('pa-skilledworker-list-common-challenges-applicants-face');
  if (pa_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#pa-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_how_we_solve_these_challenges = document.getElementById('pa-skilledworker-list-how-we-solve-these-challenges');
  if (pa_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#pa-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_residency_overview = document.getElementById('pa-skilledworker-section-residency-overview');
  if (pa_skilledworker_section_residency_overview) {
    gsap.fromTo('#pa-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_form_who_is_this_residency_for = document.getElementById('pa-skilledworker-form-who-is-this-residency-for');
  if (pa_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#pa-skilledworker-form-who-is-this-residency-for input, #pa-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_required_documents = document.getElementById('pa-skilledworker-list-required-documents');
  if (pa_skilledworker_list_required_documents) {
    gsap.from('#pa-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_application_process = document.getElementById('pa-skilledworker-list-application-process');
  if (pa_skilledworker_list_application_process) {
    gsap.from('#pa-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_timelines_deadlines = document.getElementById('pa-skilledworker-section-timelines-deadlines');
  if (pa_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#pa-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_fees_costs = document.getElementById('pa-skilledworker-section-fees-costs');
  if (pa_skilledworker_section_fees_costs) {
    gsap.fromTo('#pa-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_risks_common_mistakes = document.getElementById('pa-skilledworker-list-risks-common-mistakes');
  if (pa_skilledworker_list_risks_common_mistakes) {
    gsap.from('#pa-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_diy_vs_professional_assistance = document.getElementById('pa-skilledworker-section-diy-vs-professional-assistance');
  if (pa_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_par_specific_context = document.getElementById('pa-skilledworker-section-par-specific-context');
  if (pa_skilledworker_section_par_specific_context) {
    gsap.fromTo('#pa-skilledworker-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_what_our_clients_say = document.getElementById('pa-skilledworker-section-what-our-clients-say');
  if (pa_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#pa-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_frequently_asked_questions = document.getElementById('pa-skilledworker-section-frequently-asked-questions');
  if (pa_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#pa-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_international_support = document.getElementById('pa-skilledworker-section-international-support');
  if (pa_skilledworker_section_international_support) {
    gsap.fromTo('#pa-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_our_credentials = document.getElementById('pa-skilledworker-list-our-credentials');
  if (pa_skilledworker_list_our_credentials) {
    gsap.from('#pa-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_list_related_services = document.getElementById('pa-skilledworker-list-related-services');
  if (pa_skilledworker_list_related_services) {
    gsap.from('#pa-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_youre_in_good_hands = document.getElementById('pa-skilledworker-section-youre-in-good-hands');
  if (pa_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#pa-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_skilledworker_section_21 = document.getElementById('pa-skilledworker-section-21');
  if (pa_skilledworker_section_21) {
    gsap.fromTo('#pa-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('pa-religious-form-religious-residency-in-brazil-for-missions');
  if (pa_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#pa-religious-form-religious-residency-in-brazil-for-missions input, #pa-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_quick_facts = document.getElementById('pa-religious-list-quick-facts');
  if (pa_religious_list_quick_facts) {
    gsap.from('#pa-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_common_challenges_applicants_face = document.getElementById('pa-religious-list-common-challenges-applicants-face');
  if (pa_religious_list_common_challenges_applicants_face) {
    gsap.from('#pa-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_how_we_solve_these_challenges = document.getElementById('pa-religious-list-how-we-solve-these-challenges');
  if (pa_religious_list_how_we_solve_these_challenges) {
    gsap.from('#pa-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_residency_overview = document.getElementById('pa-religious-section-residency-overview');
  if (pa_religious_section_residency_overview) {
    gsap.fromTo('#pa-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_form_who_is_this_residency_for = document.getElementById('pa-religious-form-who-is-this-residency-for');
  if (pa_religious_form_who_is_this_residency_for) {
    gsap.from('#pa-religious-form-who-is-this-residency-for input, #pa-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_required_documents = document.getElementById('pa-religious-list-required-documents');
  if (pa_religious_list_required_documents) {
    gsap.from('#pa-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_application_process = document.getElementById('pa-religious-list-application-process');
  if (pa_religious_list_application_process) {
    gsap.from('#pa-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_timelines_deadlines = document.getElementById('pa-religious-section-timelines-deadlines');
  if (pa_religious_section_timelines_deadlines) {
    gsap.fromTo('#pa-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_fees_costs = document.getElementById('pa-religious-section-fees-costs');
  if (pa_religious_section_fees_costs) {
    gsap.fromTo('#pa-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_risks_common_mistakes = document.getElementById('pa-religious-list-risks-common-mistakes');
  if (pa_religious_list_risks_common_mistakes) {
    gsap.from('#pa-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_diy_vs_professional_assistance = document.getElementById('pa-religious-section-diy-vs-professional-assistance');
  if (pa_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_par_specific_context = document.getElementById('pa-religious-section-par-specific-context');
  if (pa_religious_section_par_specific_context) {
    gsap.fromTo('#pa-religious-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_what_our_clients_say = document.getElementById('pa-religious-section-what-our-clients-say');
  if (pa_religious_section_what_our_clients_say) {
    gsap.fromTo('#pa-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_frequently_asked_questions = document.getElementById('pa-religious-section-frequently-asked-questions');
  if (pa_religious_section_frequently_asked_questions) {
    gsap.fromTo('#pa-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_international_support = document.getElementById('pa-religious-section-international-support');
  if (pa_religious_section_international_support) {
    gsap.fromTo('#pa-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_our_credentials = document.getElementById('pa-religious-list-our-credentials');
  if (pa_religious_list_our_credentials) {
    gsap.from('#pa-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_list_related_services = document.getElementById('pa-religious-list-related-services');
  if (pa_religious_list_related_services) {
    gsap.from('#pa-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_youre_in_good_hands = document.getElementById('pa-religious-section-youre-in-good-hands');
  if (pa_religious_section_youre_in_good_hands) {
    gsap.fromTo('#pa-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_religious_section_21 = document.getElementById('pa-religious-section-21');
  if (pa_religious_section_21) {
    gsap.fromTo('#pa-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('pa-investor-form-gain-residency-in-brazil-through-investment');
  if (pa_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#pa-investor-form-gain-residency-in-brazil-through-investment input, #pa-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_quick_facts = document.getElementById('pa-investor-list-quick-facts');
  if (pa_investor_list_quick_facts) {
    gsap.from('#pa-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_common_challenges_applicants_face = document.getElementById('pa-investor-list-common-challenges-applicants-face');
  if (pa_investor_list_common_challenges_applicants_face) {
    gsap.from('#pa-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_how_we_solve_these_challenges = document.getElementById('pa-investor-list-how-we-solve-these-challenges');
  if (pa_investor_list_how_we_solve_these_challenges) {
    gsap.from('#pa-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_residency_overview = document.getElementById('pa-investor-section-residency-overview');
  if (pa_investor_section_residency_overview) {
    gsap.fromTo('#pa-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_form_who_is_this_residency_for = document.getElementById('pa-investor-form-who-is-this-residency-for');
  if (pa_investor_form_who_is_this_residency_for) {
    gsap.from('#pa-investor-form-who-is-this-residency-for input, #pa-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_required_documents = document.getElementById('pa-investor-list-required-documents');
  if (pa_investor_list_required_documents) {
    gsap.from('#pa-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_application_process = document.getElementById('pa-investor-list-application-process');
  if (pa_investor_list_application_process) {
    gsap.from('#pa-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_timelines_deadlines = document.getElementById('pa-investor-section-timelines-deadlines');
  if (pa_investor_section_timelines_deadlines) {
    gsap.fromTo('#pa-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_fees_costs = document.getElementById('pa-investor-section-fees-costs');
  if (pa_investor_section_fees_costs) {
    gsap.fromTo('#pa-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_risks_common_mistakes = document.getElementById('pa-investor-list-risks-common-mistakes');
  if (pa_investor_list_risks_common_mistakes) {
    gsap.from('#pa-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_diy_vs_professional_assistance = document.getElementById('pa-investor-section-diy-vs-professional-assistance');
  if (pa_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_par_specific_context = document.getElementById('pa-investor-section-par-specific-context');
  if (pa_investor_section_par_specific_context) {
    gsap.fromTo('#pa-investor-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_what_our_clients_say = document.getElementById('pa-investor-section-what-our-clients-say');
  if (pa_investor_section_what_our_clients_say) {
    gsap.fromTo('#pa-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_frequently_asked_questions = document.getElementById('pa-investor-section-frequently-asked-questions');
  if (pa_investor_section_frequently_asked_questions) {
    gsap.fromTo('#pa-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_international_support = document.getElementById('pa-investor-section-international-support');
  if (pa_investor_section_international_support) {
    gsap.fromTo('#pa-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_our_credentials = document.getElementById('pa-investor-list-our-credentials');
  if (pa_investor_list_our_credentials) {
    gsap.from('#pa-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_list_related_services = document.getElementById('pa-investor-list-related-services');
  if (pa_investor_list_related_services) {
    gsap.from('#pa-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_youre_in_good_hands = document.getElementById('pa-investor-section-youre-in-good-hands');
  if (pa_investor_section_youre_in_good_hands) {
    gsap.fromTo('#pa-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_investor_section_21 = document.getElementById('pa-investor-section-21');
  if (pa_investor_section_21) {
    gsap.fromTo('#pa-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('pa-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (pa_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#pa-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #pa-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_quick_facts = document.getElementById('pa-healthtreatment-list-quick-facts');
  if (pa_healthtreatment_list_quick_facts) {
    gsap.from('#pa-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_common_challenges_applicants_face = document.getElementById('pa-healthtreatment-list-common-challenges-applicants-face');
  if (pa_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#pa-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('pa-healthtreatment-list-how-we-solve-these-challenges');
  if (pa_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#pa-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_residency_overview = document.getElementById('pa-healthtreatment-section-residency-overview');
  if (pa_healthtreatment_section_residency_overview) {
    gsap.fromTo('#pa-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_form_who_is_this_residency_for = document.getElementById('pa-healthtreatment-form-who-is-this-residency-for');
  if (pa_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#pa-healthtreatment-form-who-is-this-residency-for input, #pa-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_required_documents = document.getElementById('pa-healthtreatment-list-required-documents');
  if (pa_healthtreatment_list_required_documents) {
    gsap.from('#pa-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_application_process = document.getElementById('pa-healthtreatment-list-application-process');
  if (pa_healthtreatment_list_application_process) {
    gsap.from('#pa-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_timelines_deadlines = document.getElementById('pa-healthtreatment-section-timelines-deadlines');
  if (pa_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#pa-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_fees_costs = document.getElementById('pa-healthtreatment-section-fees-costs');
  if (pa_healthtreatment_section_fees_costs) {
    gsap.fromTo('#pa-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_risks_common_mistakes = document.getElementById('pa-healthtreatment-list-risks-common-mistakes');
  if (pa_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#pa-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('pa-healthtreatment-section-diy-vs-professional-assistance');
  if (pa_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_par_specific_context = document.getElementById('pa-healthtreatment-section-par-specific-context');
  if (pa_healthtreatment_section_par_specific_context) {
    gsap.fromTo('#pa-healthtreatment-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_what_our_clients_say = document.getElementById('pa-healthtreatment-section-what-our-clients-say');
  if (pa_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#pa-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_frequently_asked_questions = document.getElementById('pa-healthtreatment-section-frequently-asked-questions');
  if (pa_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#pa-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_international_support = document.getElementById('pa-healthtreatment-section-international-support');
  if (pa_healthtreatment_section_international_support) {
    gsap.fromTo('#pa-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_our_credentials = document.getElementById('pa-healthtreatment-list-our-credentials');
  if (pa_healthtreatment_list_our_credentials) {
    gsap.from('#pa-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_list_related_services = document.getElementById('pa-healthtreatment-list-related-services');
  if (pa_healthtreatment_list_related_services) {
    gsap.from('#pa-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_youre_in_good_hands = document.getElementById('pa-healthtreatment-section-youre-in-good-hands');
  if (pa_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#pa-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_healthtreatment_section_21 = document.getElementById('pa-healthtreatment-section-21');
  if (pa_healthtreatment_section_21) {
    gsap.fromTo('#pa-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('pa-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (pa_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#pa-cplp-form-residency-for-cplp-citizens-in-brazil input, #pa-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_quick_facts = document.getElementById('pa-cplp-list-quick-facts');
  if (pa_cplp_list_quick_facts) {
    gsap.from('#pa-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_common_challenges_applicants_face = document.getElementById('pa-cplp-list-common-challenges-applicants-face');
  if (pa_cplp_list_common_challenges_applicants_face) {
    gsap.from('#pa-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_how_we_solve_these_challenges = document.getElementById('pa-cplp-list-how-we-solve-these-challenges');
  if (pa_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#pa-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_residency_overview = document.getElementById('pa-cplp-section-residency-overview');
  if (pa_cplp_section_residency_overview) {
    gsap.fromTo('#pa-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_form_who_is_this_residency_for = document.getElementById('pa-cplp-form-who-is-this-residency-for');
  if (pa_cplp_form_who_is_this_residency_for) {
    gsap.from('#pa-cplp-form-who-is-this-residency-for input, #pa-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_required_documents = document.getElementById('pa-cplp-list-required-documents');
  if (pa_cplp_list_required_documents) {
    gsap.from('#pa-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_application_process = document.getElementById('pa-cplp-list-application-process');
  if (pa_cplp_list_application_process) {
    gsap.from('#pa-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_timelines_deadlines = document.getElementById('pa-cplp-section-timelines-deadlines');
  if (pa_cplp_section_timelines_deadlines) {
    gsap.fromTo('#pa-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_fees_costs = document.getElementById('pa-cplp-section-fees-costs');
  if (pa_cplp_section_fees_costs) {
    gsap.fromTo('#pa-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_risks_common_mistakes = document.getElementById('pa-cplp-list-risks-common-mistakes');
  if (pa_cplp_list_risks_common_mistakes) {
    gsap.from('#pa-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_diy_vs_professional_assistance = document.getElementById('pa-cplp-section-diy-vs-professional-assistance');
  if (pa_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_par_specific_context = document.getElementById('pa-cplp-section-par-specific-context');
  if (pa_cplp_section_par_specific_context) {
    gsap.fromTo('#pa-cplp-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_what_our_clients_say = document.getElementById('pa-cplp-section-what-our-clients-say');
  if (pa_cplp_section_what_our_clients_say) {
    gsap.fromTo('#pa-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_frequently_asked_questions = document.getElementById('pa-cplp-section-frequently-asked-questions');
  if (pa_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#pa-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_international_support = document.getElementById('pa-cplp-section-international-support');
  if (pa_cplp_section_international_support) {
    gsap.fromTo('#pa-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_our_credentials = document.getElementById('pa-cplp-list-our-credentials');
  if (pa_cplp_list_our_credentials) {
    gsap.from('#pa-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_list_related_services = document.getElementById('pa-cplp-list-related-services');
  if (pa_cplp_list_related_services) {
    gsap.from('#pa-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_youre_in_good_hands = document.getElementById('pa-cplp-section-youre-in-good-hands');
  if (pa_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#pa-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_cplp_section_21 = document.getElementById('pa-cplp-section-21');
  if (pa_cplp_section_21) {
    gsap.fromTo('#pa-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('pa-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (pa_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#pa-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #pa-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_quick_facts = document.getElementById('pa-youthexchange-list-quick-facts');
  if (pa_youthexchange_list_quick_facts) {
    gsap.from('#pa-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_common_challenges_applicants_face = document.getElementById('pa-youthexchange-list-common-challenges-applicants-face');
  if (pa_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#pa-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_how_we_solve_these_challenges = document.getElementById('pa-youthexchange-list-how-we-solve-these-challenges');
  if (pa_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pa-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_residency_overview = document.getElementById('pa-youthexchange-section-residency-overview');
  if (pa_youthexchange_section_residency_overview) {
    gsap.fromTo('#pa-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_form_who_is_this_residency_for = document.getElementById('pa-youthexchange-form-who-is-this-residency-for');
  if (pa_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#pa-youthexchange-form-who-is-this-residency-for input, #pa-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_required_documents = document.getElementById('pa-youthexchange-list-required-documents');
  if (pa_youthexchange_list_required_documents) {
    gsap.from('#pa-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_application_process = document.getElementById('pa-youthexchange-list-application-process');
  if (pa_youthexchange_list_application_process) {
    gsap.from('#pa-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_timelines_deadlines = document.getElementById('pa-youthexchange-section-timelines-deadlines');
  if (pa_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#pa-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_fees_costs = document.getElementById('pa-youthexchange-section-fees-costs');
  if (pa_youthexchange_section_fees_costs) {
    gsap.fromTo('#pa-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_risks_common_mistakes = document.getElementById('pa-youthexchange-list-risks-common-mistakes');
  if (pa_youthexchange_list_risks_common_mistakes) {
    gsap.from('#pa-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_diy_vs_professional_assistance = document.getElementById('pa-youthexchange-section-diy-vs-professional-assistance');
  if (pa_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_par_specific_context = document.getElementById('pa-youthexchange-section-par-specific-context');
  if (pa_youthexchange_section_par_specific_context) {
    gsap.fromTo('#pa-youthexchange-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_what_our_clients_say = document.getElementById('pa-youthexchange-section-what-our-clients-say');
  if (pa_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#pa-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_frequently_asked_questions = document.getElementById('pa-youthexchange-section-frequently-asked-questions');
  if (pa_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pa-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_international_support = document.getElementById('pa-youthexchange-section-international-support');
  if (pa_youthexchange_section_international_support) {
    gsap.fromTo('#pa-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_our_credentials = document.getElementById('pa-youthexchange-list-our-credentials');
  if (pa_youthexchange_list_our_credentials) {
    gsap.from('#pa-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_list_related_services = document.getElementById('pa-youthexchange-list-related-services');
  if (pa_youthexchange_list_related_services) {
    gsap.from('#pa-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_youre_in_good_hands = document.getElementById('pa-youthexchange-section-youre-in-good-hands');
  if (pa_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pa-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_youthexchange_section_21 = document.getElementById('pa-youthexchange-section-21');
  if (pa_youthexchange_section_21) {
    gsap.fromTo('#pa-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('pa-work-form-work-and-reside-in-brazil-with-work-residency');
  if (pa_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#pa-work-form-work-and-reside-in-brazil-with-work-residency input, #pa-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_quick_facts = document.getElementById('pa-work-list-quick-facts');
  if (pa_work_list_quick_facts) {
    gsap.from('#pa-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_common_challenges_applicants_face = document.getElementById('pa-work-list-common-challenges-applicants-face');
  if (pa_work_list_common_challenges_applicants_face) {
    gsap.from('#pa-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_how_we_solve_these_challenges = document.getElementById('pa-work-list-how-we-solve-these-challenges');
  if (pa_work_list_how_we_solve_these_challenges) {
    gsap.from('#pa-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_residency_overview = document.getElementById('pa-work-section-residency-overview');
  if (pa_work_section_residency_overview) {
    gsap.fromTo('#pa-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_form_who_is_this_residency_for = document.getElementById('pa-work-form-who-is-this-residency-for');
  if (pa_work_form_who_is_this_residency_for) {
    gsap.from('#pa-work-form-who-is-this-residency-for input, #pa-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_required_documents = document.getElementById('pa-work-list-required-documents');
  if (pa_work_list_required_documents) {
    gsap.from('#pa-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_application_process = document.getElementById('pa-work-list-application-process');
  if (pa_work_list_application_process) {
    gsap.from('#pa-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_timelines_deadlines = document.getElementById('pa-work-section-timelines-deadlines');
  if (pa_work_section_timelines_deadlines) {
    gsap.fromTo('#pa-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_fees_costs = document.getElementById('pa-work-section-fees-costs');
  if (pa_work_section_fees_costs) {
    gsap.fromTo('#pa-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_risks_common_mistakes = document.getElementById('pa-work-list-risks-common-mistakes');
  if (pa_work_list_risks_common_mistakes) {
    gsap.from('#pa-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_diy_vs_professional_assistance = document.getElementById('pa-work-section-diy-vs-professional-assistance');
  if (pa_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_par_specific_context = document.getElementById('pa-work-section-par-specific-context');
  if (pa_work_section_par_specific_context) {
    gsap.fromTo('#pa-work-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_what_our_clients_say = document.getElementById('pa-work-section-what-our-clients-say');
  if (pa_work_section_what_our_clients_say) {
    gsap.fromTo('#pa-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_frequently_asked_questions = document.getElementById('pa-work-section-frequently-asked-questions');
  if (pa_work_section_frequently_asked_questions) {
    gsap.fromTo('#pa-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_international_support = document.getElementById('pa-work-section-international-support');
  if (pa_work_section_international_support) {
    gsap.fromTo('#pa-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_our_credentials = document.getElementById('pa-work-list-our-credentials');
  if (pa_work_list_our_credentials) {
    gsap.from('#pa-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_list_related_services = document.getElementById('pa-work-list-related-services');
  if (pa_work_list_related_services) {
    gsap.from('#pa-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_youre_in_good_hands = document.getElementById('pa-work-section-youre-in-good-hands');
  if (pa_work_section_youre_in_good_hands) {
    gsap.fromTo('#pa-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_work_section_21 = document.getElementById('pa-work-section-21');
  if (pa_work_section_21) {
    gsap.fromTo('#pa-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('pa-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (pa_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#pa-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #pa-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_quick_facts = document.getElementById('pa-startup-list-quick-facts');
  if (pa_startup_list_quick_facts) {
    gsap.from('#pa-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_common_challenges_applicants_face = document.getElementById('pa-startup-list-common-challenges-applicants-face');
  if (pa_startup_list_common_challenges_applicants_face) {
    gsap.from('#pa-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_how_we_solve_these_challenges = document.getElementById('pa-startup-list-how-we-solve-these-challenges');
  if (pa_startup_list_how_we_solve_these_challenges) {
    gsap.from('#pa-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_visa_overview = document.getElementById('pa-startup-section-visa-overview');
  if (pa_startup_section_visa_overview) {
    gsap.fromTo('#pa-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_form_who_is_this_visa_for = document.getElementById('pa-startup-form-who-is-this-visa-for');
  if (pa_startup_form_who_is_this_visa_for) {
    gsap.from('#pa-startup-form-who-is-this-visa-for input, #pa-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_required_documents = document.getElementById('pa-startup-list-required-documents');
  if (pa_startup_list_required_documents) {
    gsap.from('#pa-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_application_process = document.getElementById('pa-startup-list-application-process');
  if (pa_startup_list_application_process) {
    gsap.from('#pa-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_timelines_deadlines = document.getElementById('pa-startup-section-timelines-deadlines');
  if (pa_startup_section_timelines_deadlines) {
    gsap.fromTo('#pa-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_fees_costs = document.getElementById('pa-startup-section-fees-costs');
  if (pa_startup_section_fees_costs) {
    gsap.fromTo('#pa-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_risks_common_mistakes = document.getElementById('pa-startup-list-risks-common-mistakes');
  if (pa_startup_list_risks_common_mistakes) {
    gsap.from('#pa-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_diy_vs_professional_assistance = document.getElementById('pa-startup-section-diy-vs-professional-assistance');
  if (pa_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_par_specific_context = document.getElementById('pa-startup-section-par-specific-context');
  if (pa_startup_section_par_specific_context) {
    gsap.fromTo('#pa-startup-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_what_our_clients_say = document.getElementById('pa-startup-section-what-our-clients-say');
  if (pa_startup_section_what_our_clients_say) {
    gsap.fromTo('#pa-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_frequently_asked_questions = document.getElementById('pa-startup-section-frequently-asked-questions');
  if (pa_startup_section_frequently_asked_questions) {
    gsap.fromTo('#pa-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_international_support = document.getElementById('pa-startup-section-international-support');
  if (pa_startup_section_international_support) {
    gsap.fromTo('#pa-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_our_credentials = document.getElementById('pa-startup-list-our-credentials');
  if (pa_startup_list_our_credentials) {
    gsap.from('#pa-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_list_related_services = document.getElementById('pa-startup-list-related-services');
  if (pa_startup_list_related_services) {
    gsap.from('#pa-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_youre_in_good_hands = document.getElementById('pa-startup-section-youre-in-good-hands');
  if (pa_startup_section_youre_in_good_hands) {
    gsap.fromTo('#pa-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_startup_section_21 = document.getElementById('pa-startup-section-21');
  if (pa_startup_section_21) {
    gsap.fromTo('#pa-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('pa-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (pa_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#pa-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #pa-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_quick_facts = document.getElementById('pa-family-list-quick-facts');
  if (pa_family_list_quick_facts) {
    gsap.from('#pa-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_common_challenges_applicants_face = document.getElementById('pa-family-list-common-challenges-applicants-face');
  if (pa_family_list_common_challenges_applicants_face) {
    gsap.from('#pa-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_how_we_solve_these_challenges = document.getElementById('pa-family-list-how-we-solve-these-challenges');
  if (pa_family_list_how_we_solve_these_challenges) {
    gsap.from('#pa-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_visa_overview = document.getElementById('pa-family-section-visa-overview');
  if (pa_family_section_visa_overview) {
    gsap.fromTo('#pa-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_form_who_is_this_visa_for = document.getElementById('pa-family-form-who-is-this-visa-for');
  if (pa_family_form_who_is_this_visa_for) {
    gsap.from('#pa-family-form-who-is-this-visa-for input, #pa-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_required_documents = document.getElementById('pa-family-list-required-documents');
  if (pa_family_list_required_documents) {
    gsap.from('#pa-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_application_process = document.getElementById('pa-family-list-application-process');
  if (pa_family_list_application_process) {
    gsap.from('#pa-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_timelines_deadlines = document.getElementById('pa-family-section-timelines-deadlines');
  if (pa_family_section_timelines_deadlines) {
    gsap.fromTo('#pa-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_fees_costs = document.getElementById('pa-family-section-fees-costs');
  if (pa_family_section_fees_costs) {
    gsap.fromTo('#pa-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_risks_common_mistakes = document.getElementById('pa-family-list-risks-common-mistakes');
  if (pa_family_list_risks_common_mistakes) {
    gsap.from('#pa-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_diy_vs_professional_assistance = document.getElementById('pa-family-section-diy-vs-professional-assistance');
  if (pa_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_par_specific_context = document.getElementById('pa-family-section-par-specific-context');
  if (pa_family_section_par_specific_context) {
    gsap.fromTo('#pa-family-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_what_our_clients_say = document.getElementById('pa-family-section-what-our-clients-say');
  if (pa_family_section_what_our_clients_say) {
    gsap.fromTo('#pa-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_frequently_asked_questions = document.getElementById('pa-family-section-frequently-asked-questions');
  if (pa_family_section_frequently_asked_questions) {
    gsap.fromTo('#pa-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_international_support = document.getElementById('pa-family-section-international-support');
  if (pa_family_section_international_support) {
    gsap.fromTo('#pa-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_our_credentials = document.getElementById('pa-family-list-our-credentials');
  if (pa_family_list_our_credentials) {
    gsap.from('#pa-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_list_related_services = document.getElementById('pa-family-list-related-services');
  if (pa_family_list_related_services) {
    gsap.from('#pa-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_youre_in_good_hands = document.getElementById('pa-family-section-youre-in-good-hands');
  if (pa_family_section_youre_in_good_hands) {
    gsap.fromTo('#pa-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_family_section_21 = document.getElementById('pa-family-section-21');
  if (pa_family_section_21) {
    gsap.fromTo('#pa-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('pa-sports-form-compete-in-brazil-with-the-sports-visa');
  if (pa_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#pa-sports-form-compete-in-brazil-with-the-sports-visa input, #pa-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_quick_facts = document.getElementById('pa-sports-list-quick-facts');
  if (pa_sports_list_quick_facts) {
    gsap.from('#pa-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_common_challenges_applicants_face = document.getElementById('pa-sports-list-common-challenges-applicants-face');
  if (pa_sports_list_common_challenges_applicants_face) {
    gsap.from('#pa-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_how_we_solve_these_challenges = document.getElementById('pa-sports-list-how-we-solve-these-challenges');
  if (pa_sports_list_how_we_solve_these_challenges) {
    gsap.from('#pa-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_visa_overview = document.getElementById('pa-sports-section-visa-overview');
  if (pa_sports_section_visa_overview) {
    gsap.fromTo('#pa-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_form_who_is_this_visa_for = document.getElementById('pa-sports-form-who-is-this-visa-for');
  if (pa_sports_form_who_is_this_visa_for) {
    gsap.from('#pa-sports-form-who-is-this-visa-for input, #pa-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_required_documents = document.getElementById('pa-sports-list-required-documents');
  if (pa_sports_list_required_documents) {
    gsap.from('#pa-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_application_process = document.getElementById('pa-sports-list-application-process');
  if (pa_sports_list_application_process) {
    gsap.from('#pa-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_timelines_deadlines = document.getElementById('pa-sports-section-timelines-deadlines');
  if (pa_sports_section_timelines_deadlines) {
    gsap.fromTo('#pa-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_fees_costs = document.getElementById('pa-sports-section-fees-costs');
  if (pa_sports_section_fees_costs) {
    gsap.fromTo('#pa-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_risks_common_mistakes = document.getElementById('pa-sports-list-risks-common-mistakes');
  if (pa_sports_list_risks_common_mistakes) {
    gsap.from('#pa-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_diy_vs_professional_assistance = document.getElementById('pa-sports-section-diy-vs-professional-assistance');
  if (pa_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_par_specific_context = document.getElementById('pa-sports-section-par-specific-context');
  if (pa_sports_section_par_specific_context) {
    gsap.fromTo('#pa-sports-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_what_our_clients_say = document.getElementById('pa-sports-section-what-our-clients-say');
  if (pa_sports_section_what_our_clients_say) {
    gsap.fromTo('#pa-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_frequently_asked_questions = document.getElementById('pa-sports-section-frequently-asked-questions');
  if (pa_sports_section_frequently_asked_questions) {
    gsap.fromTo('#pa-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_international_support = document.getElementById('pa-sports-section-international-support');
  if (pa_sports_section_international_support) {
    gsap.fromTo('#pa-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_our_credentials = document.getElementById('pa-sports-list-our-credentials');
  if (pa_sports_list_our_credentials) {
    gsap.from('#pa-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_list_related_services = document.getElementById('pa-sports-list-related-services');
  if (pa_sports_list_related_services) {
    gsap.from('#pa-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_youre_in_good_hands = document.getElementById('pa-sports-section-youre-in-good-hands');
  if (pa_sports_section_youre_in_good_hands) {
    gsap.fromTo('#pa-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_sports_section_21 = document.getElementById('pa-sports-section-21');
  if (pa_sports_section_21) {
    gsap.fromTo('#pa-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('pa-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (pa_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#pa-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #pa-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_quick_facts = document.getElementById('pa-medical-list-quick-facts');
  if (pa_medical_list_quick_facts) {
    gsap.from('#pa-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_common_challenges_applicants_face = document.getElementById('pa-medical-list-common-challenges-applicants-face');
  if (pa_medical_list_common_challenges_applicants_face) {
    gsap.from('#pa-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_how_we_solve_these_challenges = document.getElementById('pa-medical-list-how-we-solve-these-challenges');
  if (pa_medical_list_how_we_solve_these_challenges) {
    gsap.from('#pa-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_visa_overview = document.getElementById('pa-medical-section-visa-overview');
  if (pa_medical_section_visa_overview) {
    gsap.fromTo('#pa-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_form_who_is_this_visa_for = document.getElementById('pa-medical-form-who-is-this-visa-for');
  if (pa_medical_form_who_is_this_visa_for) {
    gsap.from('#pa-medical-form-who-is-this-visa-for input, #pa-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_required_documents = document.getElementById('pa-medical-list-required-documents');
  if (pa_medical_list_required_documents) {
    gsap.from('#pa-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_application_process = document.getElementById('pa-medical-list-application-process');
  if (pa_medical_list_application_process) {
    gsap.from('#pa-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_timelines_deadlines = document.getElementById('pa-medical-section-timelines-deadlines');
  if (pa_medical_section_timelines_deadlines) {
    gsap.fromTo('#pa-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_fees_costs = document.getElementById('pa-medical-section-fees-costs');
  if (pa_medical_section_fees_costs) {
    gsap.fromTo('#pa-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_risks_common_mistakes = document.getElementById('pa-medical-list-risks-common-mistakes');
  if (pa_medical_list_risks_common_mistakes) {
    gsap.from('#pa-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_diy_vs_professional_assistance = document.getElementById('pa-medical-section-diy-vs-professional-assistance');
  if (pa_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_par_specific_context = document.getElementById('pa-medical-section-par-specific-context');
  if (pa_medical_section_par_specific_context) {
    gsap.fromTo('#pa-medical-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_what_our_clients_say = document.getElementById('pa-medical-section-what-our-clients-say');
  if (pa_medical_section_what_our_clients_say) {
    gsap.fromTo('#pa-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_frequently_asked_questions = document.getElementById('pa-medical-section-frequently-asked-questions');
  if (pa_medical_section_frequently_asked_questions) {
    gsap.fromTo('#pa-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_international_support = document.getElementById('pa-medical-section-international-support');
  if (pa_medical_section_international_support) {
    gsap.fromTo('#pa-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_our_credentials = document.getElementById('pa-medical-list-our-credentials');
  if (pa_medical_list_our_credentials) {
    gsap.from('#pa-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_list_related_services = document.getElementById('pa-medical-list-related-services');
  if (pa_medical_list_related_services) {
    gsap.from('#pa-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_youre_in_good_hands = document.getElementById('pa-medical-section-youre-in-good-hands');
  if (pa_medical_section_youre_in_good_hands) {
    gsap.fromTo('#pa-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_medical_section_21 = document.getElementById('pa-medical-section-21');
  if (pa_medical_section_21) {
    gsap.fromTo('#pa-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('pa-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (pa_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#pa-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #pa-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_quick_facts = document.getElementById('pa-tourist-list-quick-facts');
  if (pa_tourist_list_quick_facts) {
    gsap.from('#pa-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_common_challenges_applicants_face = document.getElementById('pa-tourist-list-common-challenges-applicants-face');
  if (pa_tourist_list_common_challenges_applicants_face) {
    gsap.from('#pa-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_how_we_solve_these_challenges = document.getElementById('pa-tourist-list-how-we-solve-these-challenges');
  if (pa_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#pa-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_visa_overview = document.getElementById('pa-tourist-section-visa-overview');
  if (pa_tourist_section_visa_overview) {
    gsap.fromTo('#pa-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_form_who_is_this_visa_for = document.getElementById('pa-tourist-form-who-is-this-visa-for');
  if (pa_tourist_form_who_is_this_visa_for) {
    gsap.from('#pa-tourist-form-who-is-this-visa-for input, #pa-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_required_documents = document.getElementById('pa-tourist-list-required-documents');
  if (pa_tourist_list_required_documents) {
    gsap.from('#pa-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_application_process = document.getElementById('pa-tourist-list-application-process');
  if (pa_tourist_list_application_process) {
    gsap.from('#pa-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_timelines_deadlines = document.getElementById('pa-tourist-section-timelines-deadlines');
  if (pa_tourist_section_timelines_deadlines) {
    gsap.fromTo('#pa-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_fees_costs = document.getElementById('pa-tourist-section-fees-costs');
  if (pa_tourist_section_fees_costs) {
    gsap.fromTo('#pa-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_risks_common_mistakes = document.getElementById('pa-tourist-list-risks-common-mistakes');
  if (pa_tourist_list_risks_common_mistakes) {
    gsap.from('#pa-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_diy_vs_professional_assistance = document.getElementById('pa-tourist-section-diy-vs-professional-assistance');
  if (pa_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_par_specific_context = document.getElementById('pa-tourist-section-par-specific-context');
  if (pa_tourist_section_par_specific_context) {
    gsap.fromTo('#pa-tourist-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_what_our_clients_say = document.getElementById('pa-tourist-section-what-our-clients-say');
  if (pa_tourist_section_what_our_clients_say) {
    gsap.fromTo('#pa-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_frequently_asked_questions = document.getElementById('pa-tourist-section-frequently-asked-questions');
  if (pa_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#pa-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_international_support = document.getElementById('pa-tourist-section-international-support');
  if (pa_tourist_section_international_support) {
    gsap.fromTo('#pa-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_our_credentials = document.getElementById('pa-tourist-list-our-credentials');
  if (pa_tourist_list_our_credentials) {
    gsap.from('#pa-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_list_related_services = document.getElementById('pa-tourist-list-related-services');
  if (pa_tourist_list_related_services) {
    gsap.from('#pa-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_youre_in_good_hands = document.getElementById('pa-tourist-section-youre-in-good-hands');
  if (pa_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#pa-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_tourist_section_21 = document.getElementById('pa-tourist-section-21');
  if (pa_tourist_section_21) {
    gsap.fromTo('#pa-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('pa-transit-form-transit-through-brazil-with-the-transit-visa');
  if (pa_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#pa-transit-form-transit-through-brazil-with-the-transit-visa input, #pa-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_quick_facts = document.getElementById('pa-transit-list-quick-facts');
  if (pa_transit_list_quick_facts) {
    gsap.from('#pa-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_common_challenges_applicants_face = document.getElementById('pa-transit-list-common-challenges-applicants-face');
  if (pa_transit_list_common_challenges_applicants_face) {
    gsap.from('#pa-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_how_we_solve_these_challenges = document.getElementById('pa-transit-list-how-we-solve-these-challenges');
  if (pa_transit_list_how_we_solve_these_challenges) {
    gsap.from('#pa-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_visa_overview = document.getElementById('pa-transit-section-visa-overview');
  if (pa_transit_section_visa_overview) {
    gsap.fromTo('#pa-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_form_who_is_this_visa_for = document.getElementById('pa-transit-form-who-is-this-visa-for');
  if (pa_transit_form_who_is_this_visa_for) {
    gsap.from('#pa-transit-form-who-is-this-visa-for input, #pa-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_required_documents = document.getElementById('pa-transit-list-required-documents');
  if (pa_transit_list_required_documents) {
    gsap.from('#pa-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_application_process = document.getElementById('pa-transit-list-application-process');
  if (pa_transit_list_application_process) {
    gsap.from('#pa-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_timelines_deadlines = document.getElementById('pa-transit-section-timelines-deadlines');
  if (pa_transit_section_timelines_deadlines) {
    gsap.fromTo('#pa-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_fees_costs = document.getElementById('pa-transit-section-fees-costs');
  if (pa_transit_section_fees_costs) {
    gsap.fromTo('#pa-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_risks_common_mistakes = document.getElementById('pa-transit-list-risks-common-mistakes');
  if (pa_transit_list_risks_common_mistakes) {
    gsap.from('#pa-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_diy_vs_professional_assistance = document.getElementById('pa-transit-section-diy-vs-professional-assistance');
  if (pa_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_par_specific_context = document.getElementById('pa-transit-section-par-specific-context');
  if (pa_transit_section_par_specific_context) {
    gsap.fromTo('#pa-transit-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_what_our_clients_say = document.getElementById('pa-transit-section-what-our-clients-say');
  if (pa_transit_section_what_our_clients_say) {
    gsap.fromTo('#pa-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_frequently_asked_questions = document.getElementById('pa-transit-section-frequently-asked-questions');
  if (pa_transit_section_frequently_asked_questions) {
    gsap.fromTo('#pa-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_international_support = document.getElementById('pa-transit-section-international-support');
  if (pa_transit_section_international_support) {
    gsap.fromTo('#pa-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_our_credentials = document.getElementById('pa-transit-list-our-credentials');
  if (pa_transit_list_our_credentials) {
    gsap.from('#pa-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_list_related_services = document.getElementById('pa-transit-list-related-services');
  if (pa_transit_list_related_services) {
    gsap.from('#pa-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_youre_in_good_hands = document.getElementById('pa-transit-section-youre-in-good-hands');
  if (pa_transit_section_youre_in_good_hands) {
    gsap.fromTo('#pa-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_transit_section_21 = document.getElementById('pa-transit-section-21');
  if (pa_transit_section_21) {
    gsap.fromTo('#pa-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_form_study_in_brazil_with_the_student_visa = document.getElementById('pa-student-form-study-in-brazil-with-the-student-visa');
  if (pa_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#pa-student-form-study-in-brazil-with-the-student-visa input, #pa-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_quick_facts = document.getElementById('pa-student-list-quick-facts');
  if (pa_student_list_quick_facts) {
    gsap.from('#pa-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_common_challenges_applicants_face = document.getElementById('pa-student-list-common-challenges-applicants-face');
  if (pa_student_list_common_challenges_applicants_face) {
    gsap.from('#pa-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_how_we_solve_these_challenges = document.getElementById('pa-student-list-how-we-solve-these-challenges');
  if (pa_student_list_how_we_solve_these_challenges) {
    gsap.from('#pa-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_visa_overview = document.getElementById('pa-student-section-visa-overview');
  if (pa_student_section_visa_overview) {
    gsap.fromTo('#pa-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_form_who_is_this_visa_for = document.getElementById('pa-student-form-who-is-this-visa-for');
  if (pa_student_form_who_is_this_visa_for) {
    gsap.from('#pa-student-form-who-is-this-visa-for input, #pa-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_required_documents = document.getElementById('pa-student-list-required-documents');
  if (pa_student_list_required_documents) {
    gsap.from('#pa-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_application_process = document.getElementById('pa-student-list-application-process');
  if (pa_student_list_application_process) {
    gsap.from('#pa-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_timelines_deadlines = document.getElementById('pa-student-section-timelines-deadlines');
  if (pa_student_section_timelines_deadlines) {
    gsap.fromTo('#pa-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_fees_costs = document.getElementById('pa-student-section-fees-costs');
  if (pa_student_section_fees_costs) {
    gsap.fromTo('#pa-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_risks_common_mistakes = document.getElementById('pa-student-list-risks-common-mistakes');
  if (pa_student_list_risks_common_mistakes) {
    gsap.from('#pa-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_diy_vs_professional_assistance = document.getElementById('pa-student-section-diy-vs-professional-assistance');
  if (pa_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_par_specific_context = document.getElementById('pa-student-section-par-specific-context');
  if (pa_student_section_par_specific_context) {
    gsap.fromTo('#pa-student-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_what_our_clients_say = document.getElementById('pa-student-section-what-our-clients-say');
  if (pa_student_section_what_our_clients_say) {
    gsap.fromTo('#pa-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_frequently_asked_questions = document.getElementById('pa-student-section-frequently-asked-questions');
  if (pa_student_section_frequently_asked_questions) {
    gsap.fromTo('#pa-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_international_support = document.getElementById('pa-student-section-international-support');
  if (pa_student_section_international_support) {
    gsap.fromTo('#pa-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_our_credentials = document.getElementById('pa-student-list-our-credentials');
  if (pa_student_list_our_credentials) {
    gsap.from('#pa-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_list_related_services = document.getElementById('pa-student-list-related-services');
  if (pa_student_list_related_services) {
    gsap.from('#pa-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_youre_in_good_hands = document.getElementById('pa-student-section-youre-in-good-hands');
  if (pa_student_section_youre_in_good_hands) {
    gsap.fromTo('#pa-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_student_section_21 = document.getElementById('pa-student-section-21');
  if (pa_student_section_21) {
    gsap.fromTo('#pa-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('pa-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (pa_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#pa-business-form-conduct-business-in-brazil-with-the-business-visa input, #pa-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_quick_facts = document.getElementById('pa-business-list-quick-facts');
  if (pa_business_list_quick_facts) {
    gsap.from('#pa-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_common_challenges_applicants_face = document.getElementById('pa-business-list-common-challenges-applicants-face');
  if (pa_business_list_common_challenges_applicants_face) {
    gsap.from('#pa-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_how_we_solve_these_challenges = document.getElementById('pa-business-list-how-we-solve-these-challenges');
  if (pa_business_list_how_we_solve_these_challenges) {
    gsap.from('#pa-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_visa_overview = document.getElementById('pa-business-section-visa-overview');
  if (pa_business_section_visa_overview) {
    gsap.fromTo('#pa-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_form_who_is_this_visa_for = document.getElementById('pa-business-form-who-is-this-visa-for');
  if (pa_business_form_who_is_this_visa_for) {
    gsap.from('#pa-business-form-who-is-this-visa-for input, #pa-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_required_documents = document.getElementById('pa-business-list-required-documents');
  if (pa_business_list_required_documents) {
    gsap.from('#pa-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_application_process = document.getElementById('pa-business-list-application-process');
  if (pa_business_list_application_process) {
    gsap.from('#pa-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_timelines_deadlines = document.getElementById('pa-business-section-timelines-deadlines');
  if (pa_business_section_timelines_deadlines) {
    gsap.fromTo('#pa-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_fees_costs = document.getElementById('pa-business-section-fees-costs');
  if (pa_business_section_fees_costs) {
    gsap.fromTo('#pa-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_risks_common_mistakes = document.getElementById('pa-business-list-risks-common-mistakes');
  if (pa_business_list_risks_common_mistakes) {
    gsap.from('#pa-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_diy_vs_professional_assistance = document.getElementById('pa-business-section-diy-vs-professional-assistance');
  if (pa_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_par_specific_context = document.getElementById('pa-business-section-par-specific-context');
  if (pa_business_section_par_specific_context) {
    gsap.fromTo('#pa-business-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_what_our_clients_say = document.getElementById('pa-business-section-what-our-clients-say');
  if (pa_business_section_what_our_clients_say) {
    gsap.fromTo('#pa-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_frequently_asked_questions = document.getElementById('pa-business-section-frequently-asked-questions');
  if (pa_business_section_frequently_asked_questions) {
    gsap.fromTo('#pa-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_international_support = document.getElementById('pa-business-section-international-support');
  if (pa_business_section_international_support) {
    gsap.fromTo('#pa-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_our_credentials = document.getElementById('pa-business-list-our-credentials');
  if (pa_business_list_our_credentials) {
    gsap.from('#pa-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_list_related_services = document.getElementById('pa-business-list-related-services');
  if (pa_business_list_related_services) {
    gsap.from('#pa-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_youre_in_good_hands = document.getElementById('pa-business-section-youre-in-good-hands');
  if (pa_business_section_youre_in_good_hands) {
    gsap.fromTo('#pa-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_business_section_21 = document.getElementById('pa-business-section-21');
  if (pa_business_section_21) {
    gsap.fromTo('#pa-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('pa-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (pa_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#pa-research-form-conduct-research-in-brazil-with-the-research-visa input, #pa-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_quick_facts = document.getElementById('pa-research-list-quick-facts');
  if (pa_research_list_quick_facts) {
    gsap.from('#pa-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_common_challenges_applicants_face = document.getElementById('pa-research-list-common-challenges-applicants-face');
  if (pa_research_list_common_challenges_applicants_face) {
    gsap.from('#pa-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_how_we_solve_these_challenges = document.getElementById('pa-research-list-how-we-solve-these-challenges');
  if (pa_research_list_how_we_solve_these_challenges) {
    gsap.from('#pa-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_visa_overview = document.getElementById('pa-research-section-visa-overview');
  if (pa_research_section_visa_overview) {
    gsap.fromTo('#pa-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_form_who_is_this_visa_for = document.getElementById('pa-research-form-who-is-this-visa-for');
  if (pa_research_form_who_is_this_visa_for) {
    gsap.from('#pa-research-form-who-is-this-visa-for input, #pa-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_required_documents = document.getElementById('pa-research-list-required-documents');
  if (pa_research_list_required_documents) {
    gsap.from('#pa-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_application_process = document.getElementById('pa-research-list-application-process');
  if (pa_research_list_application_process) {
    gsap.from('#pa-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_timelines_deadlines = document.getElementById('pa-research-section-timelines-deadlines');
  if (pa_research_section_timelines_deadlines) {
    gsap.fromTo('#pa-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_fees_costs = document.getElementById('pa-research-section-fees-costs');
  if (pa_research_section_fees_costs) {
    gsap.fromTo('#pa-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_risks_common_mistakes = document.getElementById('pa-research-list-risks-common-mistakes');
  if (pa_research_list_risks_common_mistakes) {
    gsap.from('#pa-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_diy_vs_professional_assistance = document.getElementById('pa-research-section-diy-vs-professional-assistance');
  if (pa_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_par_specific_context = document.getElementById('pa-research-section-par-specific-context');
  if (pa_research_section_par_specific_context) {
    gsap.fromTo('#pa-research-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_what_our_clients_say = document.getElementById('pa-research-section-what-our-clients-say');
  if (pa_research_section_what_our_clients_say) {
    gsap.fromTo('#pa-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_frequently_asked_questions = document.getElementById('pa-research-section-frequently-asked-questions');
  if (pa_research_section_frequently_asked_questions) {
    gsap.fromTo('#pa-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_international_support = document.getElementById('pa-research-section-international-support');
  if (pa_research_section_international_support) {
    gsap.fromTo('#pa-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_our_credentials = document.getElementById('pa-research-list-our-credentials');
  if (pa_research_list_our_credentials) {
    gsap.from('#pa-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_list_related_services = document.getElementById('pa-research-list-related-services');
  if (pa_research_list_related_services) {
    gsap.from('#pa-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_youre_in_good_hands = document.getElementById('pa-research-section-youre-in-good-hands');
  if (pa_research_section_youre_in_good_hands) {
    gsap.fromTo('#pa-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_research_section_21 = document.getElementById('pa-research-section-21');
  if (pa_research_section_21) {
    gsap.fromTo('#pa-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('pa-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (pa_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#pa-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #pa-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_quick_facts = document.getElementById('pa-diplomatic-list-quick-facts');
  if (pa_diplomatic_list_quick_facts) {
    gsap.from('#pa-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_common_challenges_applicants_face = document.getElementById('pa-diplomatic-list-common-challenges-applicants-face');
  if (pa_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#pa-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_how_we_solve_these_challenges = document.getElementById('pa-diplomatic-list-how-we-solve-these-challenges');
  if (pa_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#pa-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_visa_overview = document.getElementById('pa-diplomatic-section-visa-overview');
  if (pa_diplomatic_section_visa_overview) {
    gsap.fromTo('#pa-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_form_who_is_this_visa_for = document.getElementById('pa-diplomatic-form-who-is-this-visa-for');
  if (pa_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#pa-diplomatic-form-who-is-this-visa-for input, #pa-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_required_documents = document.getElementById('pa-diplomatic-list-required-documents');
  if (pa_diplomatic_list_required_documents) {
    gsap.from('#pa-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_application_process = document.getElementById('pa-diplomatic-list-application-process');
  if (pa_diplomatic_list_application_process) {
    gsap.from('#pa-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_timelines_deadlines = document.getElementById('pa-diplomatic-section-timelines-deadlines');
  if (pa_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#pa-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_fees_costs = document.getElementById('pa-diplomatic-section-fees-costs');
  if (pa_diplomatic_section_fees_costs) {
    gsap.fromTo('#pa-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_risks_common_mistakes = document.getElementById('pa-diplomatic-list-risks-common-mistakes');
  if (pa_diplomatic_list_risks_common_mistakes) {
    gsap.from('#pa-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_diy_vs_professional_assistance = document.getElementById('pa-diplomatic-section-diy-vs-professional-assistance');
  if (pa_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_par_specific_context = document.getElementById('pa-diplomatic-section-par-specific-context');
  if (pa_diplomatic_section_par_specific_context) {
    gsap.fromTo('#pa-diplomatic-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_what_our_clients_say = document.getElementById('pa-diplomatic-section-what-our-clients-say');
  if (pa_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#pa-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_frequently_asked_questions = document.getElementById('pa-diplomatic-section-frequently-asked-questions');
  if (pa_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#pa-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_international_support = document.getElementById('pa-diplomatic-section-international-support');
  if (pa_diplomatic_section_international_support) {
    gsap.fromTo('#pa-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_our_credentials = document.getElementById('pa-diplomatic-list-our-credentials');
  if (pa_diplomatic_list_our_credentials) {
    gsap.from('#pa-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_list_related_services = document.getElementById('pa-diplomatic-list-related-services');
  if (pa_diplomatic_list_related_services) {
    gsap.from('#pa-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_youre_in_good_hands = document.getElementById('pa-diplomatic-section-youre-in-good-hands');
  if (pa_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#pa-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_diplomatic_section_21 = document.getElementById('pa-diplomatic-section-21');
  if (pa_diplomatic_section_21) {
    gsap.fromTo('#pa-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('pa-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (pa_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#pa-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #pa-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_quick_facts = document.getElementById('pa-journalist-list-quick-facts');
  if (pa_journalist_list_quick_facts) {
    gsap.from('#pa-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_common_challenges_applicants_face = document.getElementById('pa-journalist-list-common-challenges-applicants-face');
  if (pa_journalist_list_common_challenges_applicants_face) {
    gsap.from('#pa-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_how_we_solve_these_challenges = document.getElementById('pa-journalist-list-how-we-solve-these-challenges');
  if (pa_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#pa-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_visa_overview = document.getElementById('pa-journalist-section-visa-overview');
  if (pa_journalist_section_visa_overview) {
    gsap.fromTo('#pa-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_form_who_is_this_visa_for = document.getElementById('pa-journalist-form-who-is-this-visa-for');
  if (pa_journalist_form_who_is_this_visa_for) {
    gsap.from('#pa-journalist-form-who-is-this-visa-for input, #pa-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_required_documents = document.getElementById('pa-journalist-list-required-documents');
  if (pa_journalist_list_required_documents) {
    gsap.from('#pa-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_application_process = document.getElementById('pa-journalist-list-application-process');
  if (pa_journalist_list_application_process) {
    gsap.from('#pa-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_timelines_deadlines = document.getElementById('pa-journalist-section-timelines-deadlines');
  if (pa_journalist_section_timelines_deadlines) {
    gsap.fromTo('#pa-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_fees_costs = document.getElementById('pa-journalist-section-fees-costs');
  if (pa_journalist_section_fees_costs) {
    gsap.fromTo('#pa-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_risks_common_mistakes = document.getElementById('pa-journalist-list-risks-common-mistakes');
  if (pa_journalist_list_risks_common_mistakes) {
    gsap.from('#pa-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_diy_vs_professional_assistance = document.getElementById('pa-journalist-section-diy-vs-professional-assistance');
  if (pa_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_par_specific_context = document.getElementById('pa-journalist-section-par-specific-context');
  if (pa_journalist_section_par_specific_context) {
    gsap.fromTo('#pa-journalist-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_what_our_clients_say = document.getElementById('pa-journalist-section-what-our-clients-say');
  if (pa_journalist_section_what_our_clients_say) {
    gsap.fromTo('#pa-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_frequently_asked_questions = document.getElementById('pa-journalist-section-frequently-asked-questions');
  if (pa_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#pa-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_international_support = document.getElementById('pa-journalist-section-international-support');
  if (pa_journalist_section_international_support) {
    gsap.fromTo('#pa-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_our_credentials = document.getElementById('pa-journalist-list-our-credentials');
  if (pa_journalist_list_our_credentials) {
    gsap.from('#pa-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_list_related_services = document.getElementById('pa-journalist-list-related-services');
  if (pa_journalist_list_related_services) {
    gsap.from('#pa-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_youre_in_good_hands = document.getElementById('pa-journalist-section-youre-in-good-hands');
  if (pa_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#pa-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_journalist_section_21 = document.getElementById('pa-journalist-section-21');
  if (pa_journalist_section_21) {
    gsap.fromTo('#pa-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('pa-fines-form-resolve-immigration-fines-in-brazil');
  if (pa_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#pa-fines-form-resolve-immigration-fines-in-brazil input, #pa-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_quick_facts = document.getElementById('pa-fines-list-quick-facts');
  if (pa_fines_list_quick_facts) {
    gsap.from('#pa-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_common_challenges_applicants_face = document.getElementById('pa-fines-list-common-challenges-applicants-face');
  if (pa_fines_list_common_challenges_applicants_face) {
    gsap.from('#pa-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_how_we_solve_these_challenges = document.getElementById('pa-fines-list-how-we-solve-these-challenges');
  if (pa_fines_list_how_we_solve_these_challenges) {
    gsap.from('#pa-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_service_overview = document.getElementById('pa-fines-section-service-overview');
  if (pa_fines_section_service_overview) {
    gsap.fromTo('#pa-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_form_who_is_this_service_for = document.getElementById('pa-fines-form-who-is-this-service-for');
  if (pa_fines_form_who_is_this_service_for) {
    gsap.from('#pa-fines-form-who-is-this-service-for input, #pa-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_required_documents = document.getElementById('pa-fines-list-required-documents');
  if (pa_fines_list_required_documents) {
    gsap.from('#pa-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_process = document.getElementById('pa-fines-list-process');
  if (pa_fines_list_process) {
    gsap.from('#pa-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_timelines_deadlines = document.getElementById('pa-fines-section-timelines-deadlines');
  if (pa_fines_section_timelines_deadlines) {
    gsap.fromTo('#pa-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_fees_costs = document.getElementById('pa-fines-section-fees-costs');
  if (pa_fines_section_fees_costs) {
    gsap.fromTo('#pa-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_risks_common_mistakes = document.getElementById('pa-fines-list-risks-common-mistakes');
  if (pa_fines_list_risks_common_mistakes) {
    gsap.from('#pa-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_diy_vs_professional_assistance = document.getElementById('pa-fines-section-diy-vs-professional-assistance');
  if (pa_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_par_specific_context = document.getElementById('pa-fines-section-par-specific-context');
  if (pa_fines_section_par_specific_context) {
    gsap.fromTo('#pa-fines-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_what_our_clients_say = document.getElementById('pa-fines-section-what-our-clients-say');
  if (pa_fines_section_what_our_clients_say) {
    gsap.fromTo('#pa-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_frequently_asked_questions = document.getElementById('pa-fines-section-frequently-asked-questions');
  if (pa_fines_section_frequently_asked_questions) {
    gsap.fromTo('#pa-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_international_support = document.getElementById('pa-fines-section-international-support');
  if (pa_fines_section_international_support) {
    gsap.fromTo('#pa-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_our_credentials = document.getElementById('pa-fines-list-our-credentials');
  if (pa_fines_list_our_credentials) {
    gsap.from('#pa-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_list_related_services = document.getElementById('pa-fines-list-related-services');
  if (pa_fines_list_related_services) {
    gsap.from('#pa-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_youre_in_good_hands = document.getElementById('pa-fines-section-youre-in-good-hands');
  if (pa_fines_section_youre_in_good_hands) {
    gsap.fromTo('#pa-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_fines_section_21 = document.getElementById('pa-fines-section-21');
  if (pa_fines_section_21) {
    gsap.fromTo('#pa-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_form_deportation_assistance_in_brazil = document.getElementById('pa-deportation-form-deportation-assistance-in-brazil');
  if (pa_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#pa-deportation-form-deportation-assistance-in-brazil input, #pa-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_quick_facts = document.getElementById('pa-deportation-list-quick-facts');
  if (pa_deportation_list_quick_facts) {
    gsap.from('#pa-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_common_challenges_applicants_face = document.getElementById('pa-deportation-list-common-challenges-applicants-face');
  if (pa_deportation_list_common_challenges_applicants_face) {
    gsap.from('#pa-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_how_we_solve_these_challenges = document.getElementById('pa-deportation-list-how-we-solve-these-challenges');
  if (pa_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#pa-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_service_overview = document.getElementById('pa-deportation-section-service-overview');
  if (pa_deportation_section_service_overview) {
    gsap.fromTo('#pa-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_form_who_is_this_service_for = document.getElementById('pa-deportation-form-who-is-this-service-for');
  if (pa_deportation_form_who_is_this_service_for) {
    gsap.from('#pa-deportation-form-who-is-this-service-for input, #pa-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_required_documents = document.getElementById('pa-deportation-list-required-documents');
  if (pa_deportation_list_required_documents) {
    gsap.from('#pa-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_process = document.getElementById('pa-deportation-list-process');
  if (pa_deportation_list_process) {
    gsap.from('#pa-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_timelines_deadlines = document.getElementById('pa-deportation-section-timelines-deadlines');
  if (pa_deportation_section_timelines_deadlines) {
    gsap.fromTo('#pa-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_fees_costs = document.getElementById('pa-deportation-section-fees-costs');
  if (pa_deportation_section_fees_costs) {
    gsap.fromTo('#pa-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_risks_common_mistakes = document.getElementById('pa-deportation-list-risks-common-mistakes');
  if (pa_deportation_list_risks_common_mistakes) {
    gsap.from('#pa-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_diy_vs_professional_assistance = document.getElementById('pa-deportation-section-diy-vs-professional-assistance');
  if (pa_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_par_specific_context = document.getElementById('pa-deportation-section-par-specific-context');
  if (pa_deportation_section_par_specific_context) {
    gsap.fromTo('#pa-deportation-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_what_our_clients_say = document.getElementById('pa-deportation-section-what-our-clients-say');
  if (pa_deportation_section_what_our_clients_say) {
    gsap.fromTo('#pa-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_frequently_asked_questions = document.getElementById('pa-deportation-section-frequently-asked-questions');
  if (pa_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#pa-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_international_support = document.getElementById('pa-deportation-section-international-support');
  if (pa_deportation_section_international_support) {
    gsap.fromTo('#pa-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_our_credentials = document.getElementById('pa-deportation-list-our-credentials');
  if (pa_deportation_list_our_credentials) {
    gsap.from('#pa-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_list_related_services = document.getElementById('pa-deportation-list-related-services');
  if (pa_deportation_list_related_services) {
    gsap.from('#pa-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_youre_in_good_hands = document.getElementById('pa-deportation-section-youre-in-good-hands');
  if (pa_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#pa-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_deportation_section_21 = document.getElementById('pa-deportation-section-21');
  if (pa_deportation_section_21) {
    gsap.fromTo('#pa-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('pa-translation-form-sworn-document-translation-services-in-brazil');
  if (pa_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#pa-translation-form-sworn-document-translation-services-in-brazil input, #pa-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_quick_facts = document.getElementById('pa-translation-list-quick-facts');
  if (pa_translation_list_quick_facts) {
    gsap.from('#pa-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_common_challenges_applicants_face = document.getElementById('pa-translation-list-common-challenges-applicants-face');
  if (pa_translation_list_common_challenges_applicants_face) {
    gsap.from('#pa-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_how_we_solve_these_challenges = document.getElementById('pa-translation-list-how-we-solve-these-challenges');
  if (pa_translation_list_how_we_solve_these_challenges) {
    gsap.from('#pa-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_service_overview = document.getElementById('pa-translation-section-service-overview');
  if (pa_translation_section_service_overview) {
    gsap.fromTo('#pa-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_form_who_is_this_service_for = document.getElementById('pa-translation-form-who-is-this-service-for');
  if (pa_translation_form_who_is_this_service_for) {
    gsap.from('#pa-translation-form-who-is-this-service-for input, #pa-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_required_documents = document.getElementById('pa-translation-list-required-documents');
  if (pa_translation_list_required_documents) {
    gsap.from('#pa-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_process = document.getElementById('pa-translation-list-process');
  if (pa_translation_list_process) {
    gsap.from('#pa-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_timelines_deadlines = document.getElementById('pa-translation-section-timelines-deadlines');
  if (pa_translation_section_timelines_deadlines) {
    gsap.fromTo('#pa-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_fees_costs = document.getElementById('pa-translation-section-fees-costs');
  if (pa_translation_section_fees_costs) {
    gsap.fromTo('#pa-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_risks_common_mistakes = document.getElementById('pa-translation-list-risks-common-mistakes');
  if (pa_translation_list_risks_common_mistakes) {
    gsap.from('#pa-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_diy_vs_professional_assistance = document.getElementById('pa-translation-section-diy-vs-professional-assistance');
  if (pa_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_par_specific_context = document.getElementById('pa-translation-section-par-specific-context');
  if (pa_translation_section_par_specific_context) {
    gsap.fromTo('#pa-translation-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_what_our_clients_say = document.getElementById('pa-translation-section-what-our-clients-say');
  if (pa_translation_section_what_our_clients_say) {
    gsap.fromTo('#pa-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_frequently_asked_questions = document.getElementById('pa-translation-section-frequently-asked-questions');
  if (pa_translation_section_frequently_asked_questions) {
    gsap.fromTo('#pa-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_international_support = document.getElementById('pa-translation-section-international-support');
  if (pa_translation_section_international_support) {
    gsap.fromTo('#pa-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_our_credentials = document.getElementById('pa-translation-list-our-credentials');
  if (pa_translation_list_our_credentials) {
    gsap.from('#pa-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_list_related_services = document.getElementById('pa-translation-list-related-services');
  if (pa_translation_list_related_services) {
    gsap.from('#pa-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_youre_in_good_hands = document.getElementById('pa-translation-section-youre-in-good-hands');
  if (pa_translation_section_youre_in_good_hands) {
    gsap.fromTo('#pa-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_translation_section_21 = document.getElementById('pa-translation-section-21');
  if (pa_translation_section_21) {
    gsap.fromTo('#pa-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('pa-expulsion-form-expulsion-assistance-in-brazil');
  if (pa_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#pa-expulsion-form-expulsion-assistance-in-brazil input, #pa-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_quick_facts = document.getElementById('pa-expulsion-list-quick-facts');
  if (pa_expulsion_list_quick_facts) {
    gsap.from('#pa-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_common_challenges_applicants_face = document.getElementById('pa-expulsion-list-common-challenges-applicants-face');
  if (pa_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#pa-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_how_we_solve_these_challenges = document.getElementById('pa-expulsion-list-how-we-solve-these-challenges');
  if (pa_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#pa-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_service_overview = document.getElementById('pa-expulsion-section-service-overview');
  if (pa_expulsion_section_service_overview) {
    gsap.fromTo('#pa-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_form_who_is_this_service_for = document.getElementById('pa-expulsion-form-who-is-this-service-for');
  if (pa_expulsion_form_who_is_this_service_for) {
    gsap.from('#pa-expulsion-form-who-is-this-service-for input, #pa-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_required_documents = document.getElementById('pa-expulsion-list-required-documents');
  if (pa_expulsion_list_required_documents) {
    gsap.from('#pa-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_process = document.getElementById('pa-expulsion-list-process');
  if (pa_expulsion_list_process) {
    gsap.from('#pa-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_timelines_deadlines = document.getElementById('pa-expulsion-section-timelines-deadlines');
  if (pa_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#pa-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_fees_costs = document.getElementById('pa-expulsion-section-fees-costs');
  if (pa_expulsion_section_fees_costs) {
    gsap.fromTo('#pa-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_risks_common_mistakes = document.getElementById('pa-expulsion-list-risks-common-mistakes');
  if (pa_expulsion_list_risks_common_mistakes) {
    gsap.from('#pa-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_diy_vs_professional_assistance = document.getElementById('pa-expulsion-section-diy-vs-professional-assistance');
  if (pa_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_par_specific_context = document.getElementById('pa-expulsion-section-par-specific-context');
  if (pa_expulsion_section_par_specific_context) {
    gsap.fromTo('#pa-expulsion-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_what_our_clients_say = document.getElementById('pa-expulsion-section-what-our-clients-say');
  if (pa_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#pa-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_frequently_asked_questions = document.getElementById('pa-expulsion-section-frequently-asked-questions');
  if (pa_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#pa-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_international_support = document.getElementById('pa-expulsion-section-international-support');
  if (pa_expulsion_section_international_support) {
    gsap.fromTo('#pa-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_our_credentials = document.getElementById('pa-expulsion-list-our-credentials');
  if (pa_expulsion_list_our_credentials) {
    gsap.from('#pa-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_list_related_services = document.getElementById('pa-expulsion-list-related-services');
  if (pa_expulsion_list_related_services) {
    gsap.from('#pa-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_youre_in_good_hands = document.getElementById('pa-expulsion-section-youre-in-good-hands');
  if (pa_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#pa-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_expulsion_section_21 = document.getElementById('pa-expulsion-section-21');
  if (pa_expulsion_section_21) {
    gsap.fromTo('#pa-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('pa-appeals-form-appeal-immigration-denials-in-brazil');
  if (pa_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#pa-appeals-form-appeal-immigration-denials-in-brazil input, #pa-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_quick_facts = document.getElementById('pa-appeals-list-quick-facts');
  if (pa_appeals_list_quick_facts) {
    gsap.from('#pa-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_common_challenges_applicants_face = document.getElementById('pa-appeals-list-common-challenges-applicants-face');
  if (pa_appeals_list_common_challenges_applicants_face) {
    gsap.from('#pa-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_how_we_solve_these_challenges = document.getElementById('pa-appeals-list-how-we-solve-these-challenges');
  if (pa_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#pa-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_service_overview = document.getElementById('pa-appeals-section-service-overview');
  if (pa_appeals_section_service_overview) {
    gsap.fromTo('#pa-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_form_who_is_this_service_for = document.getElementById('pa-appeals-form-who-is-this-service-for');
  if (pa_appeals_form_who_is_this_service_for) {
    gsap.from('#pa-appeals-form-who-is-this-service-for input, #pa-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_required_documents = document.getElementById('pa-appeals-list-required-documents');
  if (pa_appeals_list_required_documents) {
    gsap.from('#pa-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_appeal_process = document.getElementById('pa-appeals-list-appeal-process');
  if (pa_appeals_list_appeal_process) {
    gsap.from('#pa-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_timelines_deadlines = document.getElementById('pa-appeals-section-timelines-deadlines');
  if (pa_appeals_section_timelines_deadlines) {
    gsap.fromTo('#pa-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_fees_costs = document.getElementById('pa-appeals-section-fees-costs');
  if (pa_appeals_section_fees_costs) {
    gsap.fromTo('#pa-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_risks_common_mistakes = document.getElementById('pa-appeals-list-risks-common-mistakes');
  if (pa_appeals_list_risks_common_mistakes) {
    gsap.from('#pa-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_diy_vs_professional_assistance = document.getElementById('pa-appeals-section-diy-vs-professional-assistance');
  if (pa_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_par_specific_context = document.getElementById('pa-appeals-section-par-specific-context');
  if (pa_appeals_section_par_specific_context) {
    gsap.fromTo('#pa-appeals-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_what_our_clients_say = document.getElementById('pa-appeals-section-what-our-clients-say');
  if (pa_appeals_section_what_our_clients_say) {
    gsap.fromTo('#pa-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_frequently_asked_questions = document.getElementById('pa-appeals-section-frequently-asked-questions');
  if (pa_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#pa-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_international_support = document.getElementById('pa-appeals-section-international-support');
  if (pa_appeals_section_international_support) {
    gsap.fromTo('#pa-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_our_credentials = document.getElementById('pa-appeals-list-our-credentials');
  if (pa_appeals_list_our_credentials) {
    gsap.from('#pa-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_list_related_services = document.getElementById('pa-appeals-list-related-services');
  if (pa_appeals_list_related_services) {
    gsap.from('#pa-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_youre_in_good_hands = document.getElementById('pa-appeals-section-youre-in-good-hands');
  if (pa_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#pa-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_appeals_section_21 = document.getElementById('pa-appeals-section-21');
  if (pa_appeals_section_21) {
    gsap.fromTo('#pa-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('pa-consular-form-consular-services-in-brazil-for-citizens');
  if (pa_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#pa-consular-form-consular-services-in-brazil-for-citizens input, #pa-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_quick_facts = document.getElementById('pa-consular-list-quick-facts');
  if (pa_consular_list_quick_facts) {
    gsap.from('#pa-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_common_challenges_applicants_face = document.getElementById('pa-consular-list-common-challenges-applicants-face');
  if (pa_consular_list_common_challenges_applicants_face) {
    gsap.from('#pa-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_how_we_solve_these_challenges = document.getElementById('pa-consular-list-how-we-solve-these-challenges');
  if (pa_consular_list_how_we_solve_these_challenges) {
    gsap.from('#pa-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_service_overview = document.getElementById('pa-consular-section-service-overview');
  if (pa_consular_section_service_overview) {
    gsap.fromTo('#pa-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_form_who_is_this_service_for = document.getElementById('pa-consular-form-who-is-this-service-for');
  if (pa_consular_form_who_is_this_service_for) {
    gsap.from('#pa-consular-form-who-is-this-service-for input, #pa-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_required_documents = document.getElementById('pa-consular-list-required-documents');
  if (pa_consular_list_required_documents) {
    gsap.from('#pa-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_process = document.getElementById('pa-consular-list-process');
  if (pa_consular_list_process) {
    gsap.from('#pa-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_timelines_deadlines = document.getElementById('pa-consular-section-timelines-deadlines');
  if (pa_consular_section_timelines_deadlines) {
    gsap.fromTo('#pa-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_fees_costs = document.getElementById('pa-consular-section-fees-costs');
  if (pa_consular_section_fees_costs) {
    gsap.fromTo('#pa-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_risks_common_mistakes = document.getElementById('pa-consular-list-risks-common-mistakes');
  if (pa_consular_list_risks_common_mistakes) {
    gsap.from('#pa-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_diy_vs_professional_assistance = document.getElementById('pa-consular-section-diy-vs-professional-assistance');
  if (pa_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_par_specific_context = document.getElementById('pa-consular-section-par-specific-context');
  if (pa_consular_section_par_specific_context) {
    gsap.fromTo('#pa-consular-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_what_our_clients_say = document.getElementById('pa-consular-section-what-our-clients-say');
  if (pa_consular_section_what_our_clients_say) {
    gsap.fromTo('#pa-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_frequently_asked_questions = document.getElementById('pa-consular-section-frequently-asked-questions');
  if (pa_consular_section_frequently_asked_questions) {
    gsap.fromTo('#pa-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_international_support = document.getElementById('pa-consular-section-international-support');
  if (pa_consular_section_international_support) {
    gsap.fromTo('#pa-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_our_credentials = document.getElementById('pa-consular-list-our-credentials');
  if (pa_consular_list_our_credentials) {
    gsap.from('#pa-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_list_related_services = document.getElementById('pa-consular-list-related-services');
  if (pa_consular_list_related_services) {
    gsap.from('#pa-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_youre_in_good_hands = document.getElementById('pa-consular-section-youre-in-good-hands');
  if (pa_consular_section_youre_in_good_hands) {
    gsap.fromTo('#pa-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_consular_section_21 = document.getElementById('pa-consular-section-21');
  if (pa_consular_section_21) {
    gsap.fromTo('#pa-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('pa-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (pa_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#pa-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #pa-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_quick_facts = document.getElementById('pa-criminalrecords-list-quick-facts');
  if (pa_criminalrecords_list_quick_facts) {
    gsap.from('#pa-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_common_challenges_applicants_face = document.getElementById('pa-criminalrecords-list-common-challenges-applicants-face');
  if (pa_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#pa-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('pa-criminalrecords-list-how-we-solve-these-challenges');
  if (pa_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#pa-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_service_overview = document.getElementById('pa-criminalrecords-section-service-overview');
  if (pa_criminalrecords_section_service_overview) {
    gsap.fromTo('#pa-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_form_who_is_this_service_for = document.getElementById('pa-criminalrecords-form-who-is-this-service-for');
  if (pa_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#pa-criminalrecords-form-who-is-this-service-for input, #pa-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_required_documents = document.getElementById('pa-criminalrecords-list-required-documents');
  if (pa_criminalrecords_list_required_documents) {
    gsap.from('#pa-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_process = document.getElementById('pa-criminalrecords-list-process');
  if (pa_criminalrecords_list_process) {
    gsap.from('#pa-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_timelines_deadlines = document.getElementById('pa-criminalrecords-section-timelines-deadlines');
  if (pa_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#pa-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_fees_costs = document.getElementById('pa-criminalrecords-section-fees-costs');
  if (pa_criminalrecords_section_fees_costs) {
    gsap.fromTo('#pa-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_risks_common_mistakes = document.getElementById('pa-criminalrecords-list-risks-common-mistakes');
  if (pa_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#pa-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('pa-criminalrecords-section-diy-vs-professional-assistance');
  if (pa_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_par_specific_context = document.getElementById('pa-criminalrecords-section-par-specific-context');
  if (pa_criminalrecords_section_par_specific_context) {
    gsap.fromTo('#pa-criminalrecords-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_what_our_clients_say = document.getElementById('pa-criminalrecords-section-what-our-clients-say');
  if (pa_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#pa-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_frequently_asked_questions = document.getElementById('pa-criminalrecords-section-frequently-asked-questions');
  if (pa_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#pa-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_international_support = document.getElementById('pa-criminalrecords-section-international-support');
  if (pa_criminalrecords_section_international_support) {
    gsap.fromTo('#pa-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_our_credentials = document.getElementById('pa-criminalrecords-list-our-credentials');
  if (pa_criminalrecords_list_our_credentials) {
    gsap.from('#pa-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_list_related_services = document.getElementById('pa-criminalrecords-list-related-services');
  if (pa_criminalrecords_list_related_services) {
    gsap.from('#pa-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_youre_in_good_hands = document.getElementById('pa-criminalrecords-section-youre-in-good-hands');
  if (pa_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#pa-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_criminalrecords_section_21 = document.getElementById('pa-criminalrecords-section-21');
  if (pa_criminalrecords_section_21) {
    gsap.fromTo('#pa-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_form_extradition_assistance_in_brazil = document.getElementById('pa-extradition-form-extradition-assistance-in-brazil');
  if (pa_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#pa-extradition-form-extradition-assistance-in-brazil input, #pa-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_quick_facts = document.getElementById('pa-extradition-list-quick-facts');
  if (pa_extradition_list_quick_facts) {
    gsap.from('#pa-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_common_challenges_applicants_face = document.getElementById('pa-extradition-list-common-challenges-applicants-face');
  if (pa_extradition_list_common_challenges_applicants_face) {
    gsap.from('#pa-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_how_we_solve_these_challenges = document.getElementById('pa-extradition-list-how-we-solve-these-challenges');
  if (pa_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#pa-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_service_overview = document.getElementById('pa-extradition-section-service-overview');
  if (pa_extradition_section_service_overview) {
    gsap.fromTo('#pa-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_form_who_is_this_service_for = document.getElementById('pa-extradition-form-who-is-this-service-for');
  if (pa_extradition_form_who_is_this_service_for) {
    gsap.from('#pa-extradition-form-who-is-this-service-for input, #pa-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_required_documents = document.getElementById('pa-extradition-list-required-documents');
  if (pa_extradition_list_required_documents) {
    gsap.from('#pa-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_process = document.getElementById('pa-extradition-list-process');
  if (pa_extradition_list_process) {
    gsap.from('#pa-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_timelines_deadlines = document.getElementById('pa-extradition-section-timelines-deadlines');
  if (pa_extradition_section_timelines_deadlines) {
    gsap.fromTo('#pa-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_fees_costs = document.getElementById('pa-extradition-section-fees-costs');
  if (pa_extradition_section_fees_costs) {
    gsap.fromTo('#pa-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_risks_common_mistakes = document.getElementById('pa-extradition-list-risks-common-mistakes');
  if (pa_extradition_list_risks_common_mistakes) {
    gsap.from('#pa-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_diy_vs_professional_assistance = document.getElementById('pa-extradition-section-diy-vs-professional-assistance');
  if (pa_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_par_specific_context = document.getElementById('pa-extradition-section-par-specific-context');
  if (pa_extradition_section_par_specific_context) {
    gsap.fromTo('#pa-extradition-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_what_our_clients_say = document.getElementById('pa-extradition-section-what-our-clients-say');
  if (pa_extradition_section_what_our_clients_say) {
    gsap.fromTo('#pa-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_frequently_asked_questions = document.getElementById('pa-extradition-section-frequently-asked-questions');
  if (pa_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#pa-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_international_support = document.getElementById('pa-extradition-section-international-support');
  if (pa_extradition_section_international_support) {
    gsap.fromTo('#pa-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_our_credentials = document.getElementById('pa-extradition-list-our-credentials');
  if (pa_extradition_list_our_credentials) {
    gsap.from('#pa-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_list_related_services = document.getElementById('pa-extradition-list-related-services');
  if (pa_extradition_list_related_services) {
    gsap.from('#pa-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_youre_in_good_hands = document.getElementById('pa-extradition-section-youre-in-good-hands');
  if (pa_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#pa-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_extradition_section_21 = document.getElementById('pa-extradition-section-21');
  if (pa_extradition_section_21) {
    gsap.fromTo('#pa-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_form_discover_the_north_amazon_and_beyond = document.getElementById('pa-north-form-discover-the-north-amazon-and-beyond');
  if (pa_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#pa-north-form-discover-the-north-amazon-and-beyond input, #pa-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_quick_facts = document.getElementById('pa-north-list-quick-facts');
  if (pa_north_list_quick_facts) {
    gsap.from('#pa-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_common_challenges_applicants_face = document.getElementById('pa-north-list-common-challenges-applicants-face');
  if (pa_north_list_common_challenges_applicants_face) {
    gsap.from('#pa-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_how_we_solve_these_challenges = document.getElementById('pa-north-list-how-we-solve-these-challenges');
  if (pa_north_list_how_we_solve_these_challenges) {
    gsap.from('#pa-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_trip_overview = document.getElementById('pa-north-section-trip-overview');
  if (pa_north_section_trip_overview) {
    gsap.fromTo('#pa-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_form_who_is_this_trip_for = document.getElementById('pa-north-form-who-is-this-trip-for');
  if (pa_north_form_who_is_this_trip_for) {
    gsap.from('#pa-north-form-who-is-this-trip-for input, #pa-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_required_documents = document.getElementById('pa-north-list-required-documents');
  if (pa_north_list_required_documents) {
    gsap.from('#pa-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_booking_process = document.getElementById('pa-north-list-booking-process');
  if (pa_north_list_booking_process) {
    gsap.from('#pa-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_timelines_deadlines = document.getElementById('pa-north-section-timelines-deadlines');
  if (pa_north_section_timelines_deadlines) {
    gsap.fromTo('#pa-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_fees_costs = document.getElementById('pa-north-section-fees-costs');
  if (pa_north_section_fees_costs) {
    gsap.fromTo('#pa-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_risks_common_mistakes = document.getElementById('pa-north-list-risks-common-mistakes');
  if (pa_north_list_risks_common_mistakes) {
    gsap.from('#pa-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_diy_vs_professional_assistance = document.getElementById('pa-north-section-diy-vs-professional-assistance');
  if (pa_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_par_specific_context = document.getElementById('pa-north-section-par-specific-context');
  if (pa_north_section_par_specific_context) {
    gsap.fromTo('#pa-north-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_what_our_clients_say = document.getElementById('pa-north-section-what-our-clients-say');
  if (pa_north_section_what_our_clients_say) {
    gsap.fromTo('#pa-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_frequently_asked_questions = document.getElementById('pa-north-section-frequently-asked-questions');
  if (pa_north_section_frequently_asked_questions) {
    gsap.fromTo('#pa-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_international_support = document.getElementById('pa-north-section-international-support');
  if (pa_north_section_international_support) {
    gsap.fromTo('#pa-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_our_credentials = document.getElementById('pa-north-list-our-credentials');
  if (pa_north_list_our_credentials) {
    gsap.from('#pa-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_list_related_services = document.getElementById('pa-north-list-related-services');
  if (pa_north_list_related_services) {
    gsap.from('#pa-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_youre_in_good_hands = document.getElementById('pa-north-section-youre-in-good-hands');
  if (pa_north_section_youre_in_good_hands) {
    gsap.fromTo('#pa-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_north_section_21 = document.getElementById('pa-north-section-21');
  if (pa_north_section_21) {
    gsap.fromTo('#pa-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('pa-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (pa_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#pa-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #pa-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_quick_facts = document.getElementById('pa-centralwest-list-quick-facts');
  if (pa_centralwest_list_quick_facts) {
    gsap.from('#pa-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_common_challenges_applicants_face = document.getElementById('pa-centralwest-list-common-challenges-applicants-face');
  if (pa_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#pa-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_how_we_solve_these_challenges = document.getElementById('pa-centralwest-list-how-we-solve-these-challenges');
  if (pa_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#pa-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_trip_overview = document.getElementById('pa-centralwest-section-trip-overview');
  if (pa_centralwest_section_trip_overview) {
    gsap.fromTo('#pa-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_form_who_is_this_trip_for = document.getElementById('pa-centralwest-form-who-is-this-trip-for');
  if (pa_centralwest_form_who_is_this_trip_for) {
    gsap.from('#pa-centralwest-form-who-is-this-trip-for input, #pa-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_required_documents = document.getElementById('pa-centralwest-list-required-documents');
  if (pa_centralwest_list_required_documents) {
    gsap.from('#pa-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_booking_process = document.getElementById('pa-centralwest-list-booking-process');
  if (pa_centralwest_list_booking_process) {
    gsap.from('#pa-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_timelines_deadlines = document.getElementById('pa-centralwest-section-timelines-deadlines');
  if (pa_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#pa-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_fees_costs = document.getElementById('pa-centralwest-section-fees-costs');
  if (pa_centralwest_section_fees_costs) {
    gsap.fromTo('#pa-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_risks_common_mistakes = document.getElementById('pa-centralwest-list-risks-common-mistakes');
  if (pa_centralwest_list_risks_common_mistakes) {
    gsap.from('#pa-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_diy_vs_professional_assistance = document.getElementById('pa-centralwest-section-diy-vs-professional-assistance');
  if (pa_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_par_specific_context = document.getElementById('pa-centralwest-section-par-specific-context');
  if (pa_centralwest_section_par_specific_context) {
    gsap.fromTo('#pa-centralwest-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_what_our_clients_say = document.getElementById('pa-centralwest-section-what-our-clients-say');
  if (pa_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#pa-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_frequently_asked_questions = document.getElementById('pa-centralwest-section-frequently-asked-questions');
  if (pa_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#pa-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_international_support = document.getElementById('pa-centralwest-section-international-support');
  if (pa_centralwest_section_international_support) {
    gsap.fromTo('#pa-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_our_credentials = document.getElementById('pa-centralwest-list-our-credentials');
  if (pa_centralwest_list_our_credentials) {
    gsap.from('#pa-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_list_related_services = document.getElementById('pa-centralwest-list-related-services');
  if (pa_centralwest_list_related_services) {
    gsap.from('#pa-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_youre_in_good_hands = document.getElementById('pa-centralwest-section-youre-in-good-hands');
  if (pa_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#pa-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_centralwest_section_21 = document.getElementById('pa-centralwest-section-21');
  if (pa_centralwest_section_21) {
    gsap.fromTo('#pa-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('pa-southeast-form-dynamic-southeast-cities-and-history');
  if (pa_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#pa-southeast-form-dynamic-southeast-cities-and-history input, #pa-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_quick_facts = document.getElementById('pa-southeast-list-quick-facts');
  if (pa_southeast_list_quick_facts) {
    gsap.from('#pa-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_common_challenges_applicants_face = document.getElementById('pa-southeast-list-common-challenges-applicants-face');
  if (pa_southeast_list_common_challenges_applicants_face) {
    gsap.from('#pa-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_how_we_solve_these_challenges = document.getElementById('pa-southeast-list-how-we-solve-these-challenges');
  if (pa_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#pa-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_trip_overview = document.getElementById('pa-southeast-section-trip-overview');
  if (pa_southeast_section_trip_overview) {
    gsap.fromTo('#pa-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_form_who_is_this_trip_for = document.getElementById('pa-southeast-form-who-is-this-trip-for');
  if (pa_southeast_form_who_is_this_trip_for) {
    gsap.from('#pa-southeast-form-who-is-this-trip-for input, #pa-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_required_documents = document.getElementById('pa-southeast-list-required-documents');
  if (pa_southeast_list_required_documents) {
    gsap.from('#pa-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_booking_process = document.getElementById('pa-southeast-list-booking-process');
  if (pa_southeast_list_booking_process) {
    gsap.from('#pa-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_timelines_deadlines = document.getElementById('pa-southeast-section-timelines-deadlines');
  if (pa_southeast_section_timelines_deadlines) {
    gsap.fromTo('#pa-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_fees_costs = document.getElementById('pa-southeast-section-fees-costs');
  if (pa_southeast_section_fees_costs) {
    gsap.fromTo('#pa-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_risks_common_mistakes = document.getElementById('pa-southeast-list-risks-common-mistakes');
  if (pa_southeast_list_risks_common_mistakes) {
    gsap.from('#pa-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_diy_vs_professional_assistance = document.getElementById('pa-southeast-section-diy-vs-professional-assistance');
  if (pa_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_par_specific_context = document.getElementById('pa-southeast-section-par-specific-context');
  if (pa_southeast_section_par_specific_context) {
    gsap.fromTo('#pa-southeast-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_what_our_clients_say = document.getElementById('pa-southeast-section-what-our-clients-say');
  if (pa_southeast_section_what_our_clients_say) {
    gsap.fromTo('#pa-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_frequently_asked_questions = document.getElementById('pa-southeast-section-frequently-asked-questions');
  if (pa_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#pa-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_international_support = document.getElementById('pa-southeast-section-international-support');
  if (pa_southeast_section_international_support) {
    gsap.fromTo('#pa-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_our_credentials = document.getElementById('pa-southeast-list-our-credentials');
  if (pa_southeast_list_our_credentials) {
    gsap.from('#pa-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_list_related_services = document.getElementById('pa-southeast-list-related-services');
  if (pa_southeast_list_related_services) {
    gsap.from('#pa-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_youre_in_good_hands = document.getElementById('pa-southeast-section-youre-in-good-hands');
  if (pa_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#pa-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_southeast_section_21 = document.getElementById('pa-southeast-section-21');
  if (pa_southeast_section_21) {
    gsap.fromTo('#pa-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('pa-northeast-form-vibrant-northeast-beaches-and-culture');
  if (pa_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#pa-northeast-form-vibrant-northeast-beaches-and-culture input, #pa-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_quick_facts = document.getElementById('pa-northeast-list-quick-facts');
  if (pa_northeast_list_quick_facts) {
    gsap.from('#pa-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_common_challenges_applicants_face = document.getElementById('pa-northeast-list-common-challenges-applicants-face');
  if (pa_northeast_list_common_challenges_applicants_face) {
    gsap.from('#pa-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_how_we_solve_these_challenges = document.getElementById('pa-northeast-list-how-we-solve-these-challenges');
  if (pa_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#pa-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_trip_overview = document.getElementById('pa-northeast-section-trip-overview');
  if (pa_northeast_section_trip_overview) {
    gsap.fromTo('#pa-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_form_who_is_this_trip_for = document.getElementById('pa-northeast-form-who-is-this-trip-for');
  if (pa_northeast_form_who_is_this_trip_for) {
    gsap.from('#pa-northeast-form-who-is-this-trip-for input, #pa-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_required_documents = document.getElementById('pa-northeast-list-required-documents');
  if (pa_northeast_list_required_documents) {
    gsap.from('#pa-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_booking_process = document.getElementById('pa-northeast-list-booking-process');
  if (pa_northeast_list_booking_process) {
    gsap.from('#pa-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_timelines_deadlines = document.getElementById('pa-northeast-section-timelines-deadlines');
  if (pa_northeast_section_timelines_deadlines) {
    gsap.fromTo('#pa-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_fees_costs = document.getElementById('pa-northeast-section-fees-costs');
  if (pa_northeast_section_fees_costs) {
    gsap.fromTo('#pa-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_risks_common_mistakes = document.getElementById('pa-northeast-list-risks-common-mistakes');
  if (pa_northeast_list_risks_common_mistakes) {
    gsap.from('#pa-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_diy_vs_professional_assistance = document.getElementById('pa-northeast-section-diy-vs-professional-assistance');
  if (pa_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_par_specific_context = document.getElementById('pa-northeast-section-par-specific-context');
  if (pa_northeast_section_par_specific_context) {
    gsap.fromTo('#pa-northeast-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_what_our_clients_say = document.getElementById('pa-northeast-section-what-our-clients-say');
  if (pa_northeast_section_what_our_clients_say) {
    gsap.fromTo('#pa-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_frequently_asked_questions = document.getElementById('pa-northeast-section-frequently-asked-questions');
  if (pa_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#pa-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_international_support = document.getElementById('pa-northeast-section-international-support');
  if (pa_northeast_section_international_support) {
    gsap.fromTo('#pa-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_our_credentials = document.getElementById('pa-northeast-list-our-credentials');
  if (pa_northeast_list_our_credentials) {
    gsap.from('#pa-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_list_related_services = document.getElementById('pa-northeast-list-related-services');
  if (pa_northeast_list_related_services) {
    gsap.from('#pa-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_youre_in_good_hands = document.getElementById('pa-northeast-section-youre-in-good-hands');
  if (pa_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#pa-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_northeast_section_21 = document.getElementById('pa-northeast-section-21');
  if (pa_northeast_section_21) {
    gsap.fromTo('#pa-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_form_charming_south_wine_and_gauchos = document.getElementById('pa-south-form-charming-south-wine-and-gauchos');
  if (pa_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#pa-south-form-charming-south-wine-and-gauchos input, #pa-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_quick_facts = document.getElementById('pa-south-list-quick-facts');
  if (pa_south_list_quick_facts) {
    gsap.from('#pa-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_common_challenges_applicants_face = document.getElementById('pa-south-list-common-challenges-applicants-face');
  if (pa_south_list_common_challenges_applicants_face) {
    gsap.from('#pa-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_how_we_solve_these_challenges = document.getElementById('pa-south-list-how-we-solve-these-challenges');
  if (pa_south_list_how_we_solve_these_challenges) {
    gsap.from('#pa-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_trip_overview = document.getElementById('pa-south-section-trip-overview');
  if (pa_south_section_trip_overview) {
    gsap.fromTo('#pa-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_form_who_is_this_trip_for = document.getElementById('pa-south-form-who-is-this-trip-for');
  if (pa_south_form_who_is_this_trip_for) {
    gsap.from('#pa-south-form-who-is-this-trip-for input, #pa-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_required_documents = document.getElementById('pa-south-list-required-documents');
  if (pa_south_list_required_documents) {
    gsap.from('#pa-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_booking_process = document.getElementById('pa-south-list-booking-process');
  if (pa_south_list_booking_process) {
    gsap.from('#pa-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_timelines_deadlines = document.getElementById('pa-south-section-timelines-deadlines');
  if (pa_south_section_timelines_deadlines) {
    gsap.fromTo('#pa-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_fees_costs = document.getElementById('pa-south-section-fees-costs');
  if (pa_south_section_fees_costs) {
    gsap.fromTo('#pa-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_risks_common_mistakes = document.getElementById('pa-south-list-risks-common-mistakes');
  if (pa_south_list_risks_common_mistakes) {
    gsap.from('#pa-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_diy_vs_professional_assistance = document.getElementById('pa-south-section-diy-vs-professional-assistance');
  if (pa_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pa-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_par_specific_context = document.getElementById('pa-south-section-par-specific-context');
  if (pa_south_section_par_specific_context) {
    gsap.fromTo('#pa-south-section-par-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_what_our_clients_say = document.getElementById('pa-south-section-what-our-clients-say');
  if (pa_south_section_what_our_clients_say) {
    gsap.fromTo('#pa-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_frequently_asked_questions = document.getElementById('pa-south-section-frequently-asked-questions');
  if (pa_south_section_frequently_asked_questions) {
    gsap.fromTo('#pa-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_international_support = document.getElementById('pa-south-section-international-support');
  if (pa_south_section_international_support) {
    gsap.fromTo('#pa-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_our_credentials = document.getElementById('pa-south-list-our-credentials');
  if (pa_south_list_our_credentials) {
    gsap.from('#pa-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_list_related_services = document.getElementById('pa-south-list-related-services');
  if (pa_south_list_related_services) {
    gsap.from('#pa-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_youre_in_good_hands = document.getElementById('pa-south-section-youre-in-good-hands');
  if (pa_south_section_youre_in_good_hands) {
    gsap.fromTo('#pa-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const pa_south_section_21 = document.getElementById('pa-south-section-21');
  if (pa_south_section_21) {
    gsap.fromTo('#pa-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
