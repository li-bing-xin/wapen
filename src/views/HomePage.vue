<template>
    <div class="home">
        <main>
            <div class="first-page flex align-center">
                <div class="con flex justify-space-between">
                    <div class="flex-column">
                        <h1 class="mb-5 font-15">Great Writing, Simplified</h1>
                        <div class="mb-15 font-3">
                            Compose bold, clear, mistake-free writing with
                            Grammarly’s new AI-powered desktop Windows app.
                        </div>

                        <v-btn
                            color="primary"
                            size="large"
                            class="mr-3 font-weight-bold"
                        >
                            Get Start
                        </v-btn>
                    </div>

                    <div>
                        <video
                            src="../assets/llama_video.mp4"
                            width="500"
                            autoplay
                            controls
                        ></video>
                    </div>
                </div>
            </div>

            <div class="second-page">
                <div class="nr">
                    <h1>Works Where You Do</h1>
                    <div class="font-3 mv-10">
                        Get suggestions from Grammarly while you write in
                        desktop applications and sites across the web—as you
                        move between apps, social media, documents, messages,
                        and emails.
                    </div>

                    <div
                        class="flex justify-space-between flex-nowrap"
                        style="gap: 100px"
                    >
                        <div class="flex-1">
                            <h2 class="mb-5">Emails and Messages</h2>
                            <div class="flex flex-wrap justify-center apps">
                                <div>
                                    <img src="../assets/gmail.svg" alt="" />
                                    <div>GMAIL</div>
                                </div>
                                <div>
                                    <img src="../assets/outlook.svg" alt="" />
                                    <div>OUTLOOK</div>
                                </div>
                                <div>
                                    <img
                                        src="../assets/apple_mail.svg"
                                        alt=""
                                    />
                                    <div>APPLE MAIL</div>
                                </div>
                                <div>
                                    <img src="../assets/slack.svg" alt="" />
                                    <div>SLACK</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h2 class="mb-5">Documents and Projects</h2>
                            <div class="flex flex-wrap justify-center apps">
                                <div>
                                    <img
                                        src="../assets/google_docs.svg"
                                        alt=""
                                    />
                                    <div>GOOGLE DOCS</div>
                                </div>
                                <div>
                                    <img
                                        src="../assets/microsoft_word.svg"
                                        alt=""
                                    />
                                    <div>WORD</div>
                                </div>
                                <div>
                                    <img
                                        src="../assets/salesforce.svg"
                                        alt=""
                                    />
                                    <div>SALESFORCE</div>
                                </div>
                                <div>
                                    <img src="../assets/notion.svg" alt="" />
                                    <div>NOTION</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h2 class="mb-5">Social Media</h2>
                            <div class="flex flex-wrap justify-center apps">
                                <div>
                                    <img src="../assets/linkedin.svg" alt="" />
                                    <div>LINKEDIN</div>
                                </div>
                                <div>
                                    <img src="../assets/facebook.svg" alt="" />
                                    <div>FACEBOOK</div>
                                </div>
                                <div>
                                    <img src="../assets/twitter.svg" alt="" />
                                    <div>TWITTER</div>
                                </div>
                                <div>
                                    <img src="../assets/discord.svg" alt="" />
                                    <div>DISCORD</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="nr-2 flex justify-space-between pv-30 align-center"
                    >
                        <div>
                            <video
                                src="../assets/llama_video.mp4"
                                width="500"
                                autoplay
                                controls
                            ></video>
                        </div>

                        <div class="flex-column">
                            <h1 class="mb-5">Beyond Grammar and Spelling</h1>
                            <div class="mb-15 font-3">
                                From grammar and spelling to style and tone,
                                Grammarly’s suggestions are comprehensive,
                                helping you communicate effectively and as you
                                intend.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="third-page pv-30">
                <div class="hd">
                    <h1 class="mb-5">Everyone Can Write with Confidence</h1>
                    <div class="flex justify-space-between" style="gap: 200px">
                        <div class="font-3">
                            “Grammarly allows me to get those communications out
                            and feel confident that I’m putting my best foot
                            forward. Grammarly is like a little superpower,
                            especially when I need to be at 110%.”
                        </div>
                        <div class="bold font-5">Jeanette Stock</div>
                    </div>

                    <div class="mt-10 ph-10 flex justify-space-between">
                        <img src="../assets/new_york_times.svg" alt="" />
                        <img src="../assets/wsj.svg" alt="" />
                        <img src="../assets/usa_today.svg" alt="" />
                        <img src="../assets/techcrunch.svg" alt="" />
                        <img src="../assets/forbes.svg" alt="" />
                    </div>
                </div>
            </div>

            <div class="fourth-page text-center pb-30 pt-10">
                <div class="inner">
                    <h1 class="font-15">Brilliant Writing Awaits</h1>
                    <div class="mt-10 mb-15 font-4" style="max-width: 720px">
                        Get started for free and find out what you can
                        accomplish with the power of Grammarly at your
                        fingertips.
                    </div>

                    <v-btn
                        color="primary"
                        size="large"
                        class="font-weight-bold"
                    >
                        Get Start
                    </v-btn>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
    background: 50vw calc(40vh - 454px) / 909px no-repeat
            url("../assets/bg-1.jpg"),
        top 100vh left 0 no-repeat url("../assets/bg-left.jpg");
}

.first-page {
    min-height: 500px;
    height: calc(100vh - 67px);

    .con {
        margin: 0 150px;
        gap: 120px;
    }
}

.second-page {
    .nr {
        margin: 0 150px;
        text-align: center;

        .apps {
            gap: 50px;

            & > div {
                width: 100px;
                white-space: nowrap;
            }
        }
    }

    .nr-2 {
        text-align: left;
        gap: 200px;
    }
}

.third-page {
    background: linear-gradient(0deg, #fff 3%, hsla(0, 0%, 100%, 0)),
        linear-gradient(-257deg, #aaf2e1, #93edf5 50%, #dbebff);

    .hd {
        margin: 0 150px;
    }
}

.fourth-page {
    .inner {
        margin: 0 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
