function User(name, email, subjects = []) {
  this.name = name;
  this.email = email;
  this.subjects = subjects;
}
const users = [];
const sessions = [];
const userList = document.getElementById("userList");
const savedUsersJSON = localStorage.getItem("allUsers");
if (savedUsersJSON) {
  const savedUsers = JSON.parse(savedUsersJSON);
  savedUsers.forEach((u) => users.push(new User(u.name, u.email, u.subjects)));
}
renderUsers();
function renderUsers() {
  userList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent =
      u.name + (u.subjects.length ? " - " + u.subjects.join(", ") : "");
    userList.appendChild(li);
  });
}
const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subjects = document
    .getElementById("subjects")
    .value.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const newUser = new User(name, email, subjects);
  users.push(newUser);
  renderUsers();
  userForm.reset();
  localStorage.setItem("allUsers", JSON.stringify(users));
});
class StudySession {
  #participants = [];
  constructor(subject, date, time, maxParticipants) {
    this.subject = subject;
    this.date = date;
    this.time = time;
    this.maxParticipants = Number(maxParticipants);
  }
  addParticipants(name) {
    if (this.#participants.length >= this.maxParticipants) return false;
    if (!this.#participants.includes(name)) {
      this.#participants.push(name);
      return true;
    }
    return false;
  }
  removeParticipants(name) {
    const idx = this.#participants.indexOf(name);
    if (idx > -1) {
      this.#participants.splice(idx, 1);
      return true;
    }
    return false;
  }
  get count() {
    return this.#participants.length;
  }
  getParticipants() {
    return [...this.#participants];
  }
  toJSON() {
    return {
      subject: this.subject,
      date: this.date,
      time: this.time,
      maxParticipants: this.maxParticipants,
      participants: this.getParticipants(),
    };
  }
}
const savedSessionsJSON = localStorage.getItem("allSessions");
if (savedSessionsJSON) {
  const savedSessions = JSON.parse(savedSessionsJSON);
  savedSessions.forEach((s) => {
    const ss = new StudySession(s.subject, s.date, s.time, s.maxParticipants);
    s.participants.forEach((p) => ss.addParticipants(p));
    sessions.push(ss);
  });
}
const sessionBody = document.getElementById("sessionBody");
function renderSessions() {
  sessionBody.innerHTML = "";
  sessions.forEach((s, index) => {
    const tr = document.createElement("tr");
    const tdSubject = document.createElement("td");
    tdSubject.textContent = s.subject;
    const tdDate = document.createElement("td");
    tdDate.textContent = s.date;
    const tdTime = document.createElement("td");
    tdTime.textContent = s.time;
    const tdCount = document.createElement("td");
    tdCount.textContent = `${s.count}/${s.maxParticipants}`;
    const tdActions = document.createElement("td");
    const btnJoin = document.createElement("button");
    btnJoin.textContent = "Join";
    btnJoin.style.background = "green";
    btnJoin.style.color = "white";
    btnJoin.style.marginRight = "10px";
    btnJoin.addEventListener("click", () => {
      if (!users.length) {
        alert("Add a user first!");
        return;
      }
      const currentUser = users[0].name;
      const ok = s.addParticipants(currentUser);
      if (!ok) {
        alert("Session full!");
        return;
      }
      saveSessions();
      renderSessions();
    });
    const btnDetails = document.createElement("button");
    btnDetails.textContent = "Details";
    btnDetails.style.marginRight = "10px";

    btnDetails.addEventListener("click", () => {
      alert(
        "Participants:\n" + s.getParticipants().join("\n") || "No participants"
      );
    });
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.style.background = "red";
    btnDelete.style.color = "white";
    btnDelete.addEventListener("click", () => {
      sessions.splice(index, 1);
      saveSessions();
      renderSessions();
    });
    tdActions.appendChild(btnJoin);
    tdActions.appendChild(btnDetails);
    tdActions.appendChild(btnDelete);
    tr.appendChild(tdSubject);
    tr.appendChild(tdDate);
    tr.appendChild(tdTime);
    tr.appendChild(tdCount);
    tr.appendChild(tdActions);
    sessionBody.appendChild(tr);
  });
}
const crtSessionBtn = document.querySelector("#session-btn");
crtSessionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const subject = document.getElementById("sessionSubject").value;
  const date = document.getElementById("sessionDate").value;
  const time = document.getElementById("sessionTime").value;
  const max = document.getElementById("max").value;
  const ss = new StudySession(subject, date, time, max);
  sessions.push(ss);
  saveSessions();
  renderSessions();
});
function saveSessions() {
  const plain = sessions.map((s) => s.toJSON());
  localStorage.setItem("allSessions", JSON.stringify(plain));
}
renderSessions();
