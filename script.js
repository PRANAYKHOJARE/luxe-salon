// Application State
let bookings = JSON.parse(localStorage.getItem("salonBookings")) || [];
let adminOpen = false;

// Services Data
const services = [
  {
    id: 1,
    name: "Premium Haircut & Styling",
    price: 85,
    duration: "60 min",
    icon: "✂️",
    category: "Hair",
    description: "Professional cut and style with premium organic products",
    popular: true,
  },
  {
    id: 2,
    name: "Hair Coloring & Highlights",
    price: 150,
    duration: "120 min",
    icon: "🎨",
    category: "Hair",
    description: "Full color transformation with damage-free organic dyes",
  },
  {
    id: 3,
    name: "Keratin Treatment",
    price: 200,
    duration: "150 min",
    icon: "✨",
    category: "Hair",
    description: "Brazilian keratin for silky, frizz-free hair up to 6 months",
  },
  {
    id: 4,
    name: "Hair Extensions",
    price: 300,
    duration: "180 min",
    icon: "💫",
    category: "Hair",
    description: "Premium human hair extensions, tape-in or clip-in available",
  },
  {
    id: 5,
    name: "Bridal Hair & Makeup",
    price: 250,
    duration: "180 min",
    icon: "👰",
    category: "Bridal",
    description: "Complete bridal transformation with trial session included",
    popular: true,
  },
  {
    id: 6,
    name: "Hair Washing & Blowout",
    price: 45,
    duration: "45 min",
    icon: "💨",
    category: "Hair",
    description: "Luxury hair wash with professional styling and blowout",
  },
  {
    id: 7,
    name: "Deep Conditioning Treatment",
    price: 75,
    duration: "60 min",
    icon: "🥥",
    category: "Hair",
    description: "Intensive moisture repair with argan oil and keratin",
  },
  {
    id: 8,
    name: "HydraFacial Treatment",
    price: 180,
    duration: "90 min",
    icon: "💧",
    category: "Skincare",
    description: "Medical-grade facial with instant results and no downtime",
    popular: true,
  },
  {
    id: 9,
    name: "Anti-Aging Facial",
    price: 150,
    duration: "75 min",
    icon: "🌟",
    category: "Skincare",
    description: "Collagen-boosting treatment with LED light therapy",
  },
  {
    id: 10,
    name: "Acne Treatment Facial",
    price: 120,
    duration: "60 min",
    icon: "🧴",
    category: "Skincare",
    description: "Deep pore cleansing with salicylic acid and extractions",
  },
  {
    id: 11,
    name: "Chemical Peel",
    price: 200,
    duration: "45 min",
    icon: "🔬",
    category: "Skincare",
    description: "Professional glycolic or TCA peel for skin renewal",
  },
  {
    id: 12,
    name: "Microdermabrasion",
    price: 140,
    duration: "60 min",
    icon: "💎",
    category: "Skincare",
    description: "Diamond-tip exfoliation for smoother, brighter skin",
  },
  {
    id: 13,
    name: "Gel Manicure",
    price: 55,
    duration: "60 min",
    icon: "💅",
    category: "Nails",
    description: "Long-lasting gel polish with cuticle care and hand massage",
  },
  {
    id: 14,
    name: "Luxury Pedicure",
    price: 75,
    duration: "75 min",
    icon: "🦶",
    category: "Nails",
    description: "Spa pedicure with exfoliation, massage, and premium polish",
  },
  {
    id: 15,
    name: "Nail Art & Design",
    price: 25,
    duration: "30 min",
    icon: "🎯",
    category: "Nails",
    description: "Custom nail art and intricate designs (add-on service)",
  },
  {
    id: 16,
    name: "Acrylic/Dip Nails",
    price: 85,
    duration: "90 min",
    icon: "💎",
    category: "Nails",
    description: "Durable acrylic or dip powder nails with shaping and design",
  },
  {
    id: 17,
    name: "Eyebrow Threading & Shaping",
    price: 35,
    duration: "30 min",
    icon: "👁️",
    category: "Brows & Lashes",
    description: "Precise threading with brow mapping and trimming",
  },
  {
    id: 18,
    name: "Eyelash Extensions",
    price: 120,
    duration: "120 min",
    icon: "👀",
    category: "Brows & Lashes",
    description: "Individual lash extensions for volume and length",
    popular: true,
  },
  {
    id: 19,
    name: "Lash Lift & Tint",
    price: 85,
    duration: "60 min",
    icon: "🌙",
    category: "Brows & Lashes",
    description: "Natural lash curl and tinting for 6-8 week results",
  },
  {
    id: 20,
    name: "Brow Lamination",
    price: 75,
    duration: "45 min",
    icon: "🌊",
    category: "Brows & Lashes",
    description: "Fluffy, feathered brow look that lasts up to 8 weeks",
  },
  {
    id: 21,
    name: "Full Body Massage",
    price: 140,
    duration: "90 min",
    icon: "💆",
    category: "Wellness",
    description: "Relaxing Swedish or deep tissue massage with aromatherapy",
  },
  {
    id: 22,
    name: "Hot Stone Therapy",
    price: 160,
    duration: "90 min",
    icon: "🔥",
    category: "Wellness",
    description: "Therapeutic massage with heated volcanic stones",
  },
  {
    id: 23,
    name: "Body Scrub & Wrap",
    price: 120,
    duration: "75 min",
    icon: "🧂",
    category: "Wellness",
    description: "Exfoliating scrub with hydrating body wrap treatment",
  },
  {
    id: 24,
    name: "Makeup Application",
    price: 80,
    duration: "60 min",
    icon: "💄",
    category: "Makeup",
    description: "Professional makeup for special occasions or photoshoots",
  },
];

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  loadServices();
  loadBookings();
  updateStats();
  setMinDate();
  initializeFilters();
  initializeDemoData();
});

// Initialize with demo data if no bookings exist
function initializeDemoData() {
  if (bookings.length === 0) {
    const demoBookings = [
      {
        id: 1692875400000,
        clientName: "Sarah Johnson",
        clientEmail: "sarah.j@email.com",
        clientPhone: "(555) 123-4567",
        service: "Premium Haircut & Styling",
        servicePrice: 85,
        serviceDuration: "60 min",
        serviceCategory: "Hair",
        date: "2025-08-25",
        time: "14:00",
        notes: "First time client, looking for a new style",
        status: "confirmed",
        createdAt: "2025-08-24T10:30:00.000Z",
      },
      {
        id: 1692879000000,
        clientName: "Emily Chen",
        clientEmail: "emily.chen@email.com",
        clientPhone: "(555) 234-5678",
        service: "Hair Coloring & Highlights",
        servicePrice: 150,
        serviceDuration: "120 min",
        serviceCategory: "Hair",
        date: "2025-08-26",
        time: "10:00",
        notes: "Wants to go from brunette to blonde",
        status: "pending",
        createdAt: "2025-08-24T11:15:00.000Z",
      },
    ];
    bookings = demoBookings;
    localStorage.setItem("salonBookings", JSON.stringify(bookings));
    loadBookings();
    updateStats();
  }
}

// Load services into the page
function loadServices(categoryFilter = "all") {
  const servicesGrid = document.getElementById("servicesGrid");
  const serviceSelect = document.getElementById("service");

  // Clear existing content
  servicesGrid.innerHTML = "";

  // Filter services
  const filteredServices =
    categoryFilter === "all"
      ? services
      : services.filter((service) => service.category === categoryFilter);

  filteredServices.forEach((service) => {
    // Add to services grid
    const serviceCard = document.createElement("div");
    serviceCard.className = `service-card ${service.popular ? "popular" : ""}`;
    serviceCard.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <div class="service-category">${service.category}</div>
      <h3>${service.name}</h3>
      <div class="service-description">${service.description}</div>
      <div class="service-duration">${service.duration}</div>
      <div class="service-price">${service.price}</div>
    `;
    servicesGrid.appendChild(serviceCard);
  });

  // Load all services into booking form select (only do this once)
  if (categoryFilter === "all") {
    serviceSelect.innerHTML = '<option value="">Choose a service...</option>';

    // Group services by category
    const groupedServices = services.reduce((groups, service) => {
      if (!groups[service.category]) {
        groups[service.category] = [];
      }
      groups[service.category].push(service);
      return groups;
    }, {});

    // Add services grouped by category
    Object.keys(groupedServices)
      .sort()
      .forEach((category) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = category;

        groupedServices[category].forEach((service) => {
          const option = document.createElement("option");
          option.value = service.id;
          option.textContent = `${service.name} - $${service.price} (${service.duration})`;
          optgroup.appendChild(option);
        });

        serviceSelect.appendChild(optgroup);
      });
  }
}

// Initialize filter functionality
function initializeFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Filter services
      const category = this.getAttribute("data-category");
      loadServices(category);
    });
  });
}

// Set minimum date to today
function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("appointmentDate").min = today;
}

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);
    const selectedServiceId = formData.get("service");
    const selectedService = services.find((s) => s.id == selectedServiceId);

    if (!selectedService) {
      alert("Please select a valid service");
      return;
    }

    const booking = {
      id: Date.now(),
      clientName: formData.get("clientName"),
      clientEmail: formData.get("clientEmail"),
      clientPhone: formData.get("clientPhone"),
      service: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.duration,
      serviceCategory: selectedService.category,
      date: formData.get("appointmentDate"),
      time: formData.get("appointmentTime"),
      notes: formData.get("notes") || "No special requests",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);
    localStorage.setItem("salonBookings", JSON.stringify(bookings));

    // Reset form
    e.target.reset();

    // Update admin panel
    loadBookings();
    updateStats();

    // Show success modal
    showSuccessModal();

    console.log("Booking created successfully:", booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    alert("There was an error processing your booking. Please try again.");
  }
});

// Show success modal
function showSuccessModal() {
  const modal = document.getElementById("successModal");
  if (modal) {
    modal.classList.remove("hidden");
    // Auto-hide after 5 seconds
    setTimeout(() => {
      closeModal();
    }, 5000);
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById("successModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// Close modal when clicking outside
document.addEventListener("click", function (e) {
  const modal = document.getElementById("successModal");
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Load bookings into admin panel
function loadBookings() {
  const bookingsList = document.getElementById("bookingsList");
  bookingsList.innerHTML = "";

  // Sort bookings by creation date (newest first)
  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  sortedBookings.slice(0, 10).forEach((booking) => {
    const bookingItem = document.createElement("div");
    bookingItem.className = "booking-item";
    bookingItem.innerHTML = `
      <strong>${booking.clientName}</strong><br>
      <small>${booking.clientEmail}</small><br>
      Service: ${booking.service}<br>
      Date: ${booking.date} at ${booking.time}<br>
      Price: $${booking.servicePrice}<br>
      Status: <span class="status-${
        booking.status
      }">${booking.status.toUpperCase()}</span><br>
      <div style="margin-top: 0.5rem;">
        <button onclick="updateBookingStatus(${
          booking.id
        }, 'confirmed')" style="background: #00ff00; border: none; padding: 0.25rem 0.5rem; border-radius: 5px; margin-right: 0.5rem; cursor: pointer;">Confirm</button>
        <button onclick="updateBookingStatus(${
          booking.id
        }, 'completed')" style="background: #0080ff; border: none; padding: 0.25rem 0.5rem; border-radius: 5px; margin-right: 0.5rem; cursor: pointer;">Complete</button>
        <button onclick="updateBookingStatus(${
          booking.id
        }, 'cancelled')" style="background: #ff0000; border: none; padding: 0.25rem 0.5rem; border-radius: 5px; cursor: pointer; color: white;">Cancel</button>
      </div>
    `;
    bookingsList.appendChild(bookingItem);
  });
}

// Update booking status
function updateBookingStatus(bookingId, newStatus) {
  const bookingIndex = bookings.findIndex((b) => b.id === bookingId);
  if (bookingIndex !== -1) {
    bookings[bookingIndex].status = newStatus;
    localStorage.setItem("salonBookings", JSON.stringify(bookings));
    loadBookings();
    updateStats();
  }
}

// Update statistics
function updateStats() {
  const total = bookings.length;
  const pending = bookings.filter((b) => b.status === "pending").length;
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;

  // Calculate today's revenue
  const today = new Date().toISOString().split("T")[0];
  const todayBookings = bookings.filter(
    (b) =>
      b.date === today && (b.status === "confirmed" || b.status === "completed")
  );
  const todayRevenue = todayBookings.reduce(
    (sum, b) => sum + b.servicePrice,
    0
  );

  document.getElementById("totalBookings").textContent = total;
  document.getElementById("pendingBookings").textContent = pending;
  document.getElementById("confirmedBookings").textContent = confirmed;
  document.getElementById("todayRevenue").textContent = todayRevenue;
}

// Toggle admin panel
function toggleAdmin() {
  adminOpen = !adminOpen;
  const panel = document.getElementById("adminPanel");
  panel.classList.toggle("open", adminOpen);
}

// Export bookings as JSON
function exportBookings() {
  const dataStr = JSON.stringify(bookings, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `salon-bookings-${
    new Date().toISOString().split("T")[0]
  }.json`;
  link.click();

  URL.revokeObjectURL(url);
}

// Scroll to booking section
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth",
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
