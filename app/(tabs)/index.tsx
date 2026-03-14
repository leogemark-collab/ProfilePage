import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Course = {
  title: string;
  description: string;
};

const courses: Course[] = [
  {
    title: "React Native Development",
    description:
      "Build mobile apps with Expo, navigation, and reusable components.",
  },
  {
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis, visualization, and basic ML.",
  },
  {
    title: "Backend Development with Node.js",
    description:
      "Learn to build scalable backend services with Node.js and Express.",
  },
];

const interests = [
  "Mobile Apps",
  "UI/UX Design",
  "Backend Development",
  "Data Visualization",
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function CourseCard({ title, description }: Course) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{description}</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/profile-placeholder.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Leo Gemark N. Llorando</Text>
          <Text style={styles.subtitle}>
            Software Engineer • Bansalan, Davao Del Sur, PH
          </Text>
          <View style={styles.badgeRow}>
            <Text style={[styles.badge, styles.badgePrimary]}>
              Open to internships
            </Text>
            <Text style={styles.badge}>Backend Developer, UI/UX Designer</Text>
          </View>
        </View>

        <Section title="About">
          <Text style={styles.paragraph}>
            Passionate about creating technology that improves daily life,
            especially in my community. I enjoy building mobile apps, exploring
            data science, and learning about backend development. Always eager
            to collaborate on projects that make a positive impact.
          </Text>
        </Section>

        <View style={styles.callout}>
          <Text style={styles.calloutLabel}>Currently building</Text>
          <Text style={styles.calloutText}>
            A community-based Lost & Found app for campus.
          </Text>
        </View>

        <Section title="Interests">
          <View style={styles.chipRow}>
            {interests.map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Courses">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
            />
          ))}
        </Section>

        <Text style={styles.footer}>
          Portfolio: leogemark-collab.github.io • Email: leogemark@gmail.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F6F8",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#E3E4E8",
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111111",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
  badgeRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  badge: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    color: "#374151",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    marginRight: 8,
    overflow: "hidden",
  },
  badgePrimary: {
    borderColor: "#93C5FD",
    color: "#1D4ED8",
    backgroundColor: "#EFF6FF",
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4B5563",
  },
  callout: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#60A5FA",
  },
  calloutLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#6B7280",
    marginBottom: 4,
    fontWeight: "600",
  },
  calloutText: {
    fontSize: 14,
    color: "#111827",
    lineHeight: 20,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 12,
    color: "#374151",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  cardBody: {
    fontSize: 12,
    color: "#4B5563",
    lineHeight: 18,
  },
  footer: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
