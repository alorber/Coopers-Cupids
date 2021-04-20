package edu.cooper.ece366.model;

public class User {
    // Variables
    // ----------
    private boolean hasProfile;
    private final String userID;
    private String password;

    // Methods
    // --------

    // Constructor
    public User(String uid, String password, boolean hp) {
        this.hasProfile = hp;
        this.userID = uid;
        this.password = password;
    }

    public void createdProfile() { this.hasProfile = true; }

    public void deletedProfile() { this.hasProfile = false; }

    public boolean hasProfile() { return this.hasProfile; }

    public String getUserID() { return this.userID; }

    public String getPassword() { return this.password; }

    public boolean checkPass(String password) { return password.equals(this.password); }
}

