package Week_1.Design_Patterns_and_Principles.Ex_1_Implementing_the_Singleton_Pattern;
 
import java.util.*;
class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger initialized... Ready to log!");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}

public class LoggerSingletonExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started");

        Logger logger2 = Logger.getInstance();
        logger2.log("Loading user dashboard");

        Logger logger3 = Logger.getInstance();
        logger3.log("User performed a search");

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("Singleton confirmed: Same logger instance used.");
        } else {
            System.out.println("Different logger instances found.");
        }
    }
}
