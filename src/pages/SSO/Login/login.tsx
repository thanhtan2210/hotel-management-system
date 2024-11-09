// import { useEffect } from 'react';
import React, { useState } from "react";
import * as Components from './Components';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';

const LogIn: React.FC = () => {
    const [signIn, toggle] = useState(true);
    return (
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoPersonOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="text" placeholder="Name" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoCallOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="text" placeholder="Phone Number" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoMailOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="email" placeholder="Email" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoLockClosedOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="password" placeholder="Password" />
                        </div>

                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoLockClosedOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="password" placeholder="Confirm Password" />
                        </div>
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Login</Components.Title>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoCallOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="text" placeholder="Phone Number" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <IoLockClosedOutline style={{ fontSize: "24px", marginRight: "10px" }} />
                            <Components.Input type="password" placeholder="Password" />
                        </div>
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <div style={{ display: "flex", gap: "30px", justifyContent: "center", justifyItems: "center" }}>
                            <Components.Button>Sign In</Components.Button>
                            <Components.Button>Sign In with OTP</Components.Button>
                        </div>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal and start your journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
    );
};
export default LogIn;